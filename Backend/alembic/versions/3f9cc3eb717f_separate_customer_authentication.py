
"""separate customer authentication

Revision ID: 3f9cc3eb717f
Revises: 67e382c639d9
"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


revision: str = "3f9cc3eb717f"
down_revision: Union[str, Sequence[str], None] = "67e382c639d9"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # The customer table is empty, so recreate it with its new structure.
    op.drop_table("customer")

    op.create_table(
        "customer",
        sa.Column(
            "customer_id",
            sa.Integer(),
            autoincrement=True,
            nullable=False,
        ),
        sa.Column("full_name", sa.String(100), nullable=False),
        sa.Column("mobile_number", sa.String(15), nullable=False),
        sa.Column("city", sa.String(100), nullable=True),
        sa.Column(
            "is_verified",
            sa.Boolean(),
            nullable=False,
            server_default=sa.false(),
        ),
        sa.Column(
            "is_active",
            sa.Boolean(),
            nullable=False,
            server_default=sa.true(),
        ),
        sa.Column(
            "created_at",
            sa.DateTime(),
            nullable=False,
            server_default=sa.func.now(),
        ),
        sa.Column(
            "updated_at",
            sa.DateTime(),
            nullable=False,
            server_default=sa.func.now(),
        ),
        sa.PrimaryKeyConstraint("customer_id"),
    )

    # Create authentication only after customer.customer_id exists.
    op.create_table(
        "authentications",
        sa.Column(
            "auth_id",
            sa.Integer(),
            autoincrement=True,
            nullable=False,
        ),
        sa.Column("customer_id", sa.Integer(), nullable=False),
        sa.Column("email", sa.String(150), nullable=False),
        sa.Column("hashed_password", sa.String(255), nullable=False),
        sa.Column(
            "role",
            sa.String(30),
            nullable=False,
            server_default="customer",
        ),
        sa.Column(
            "is_email_verified",
            sa.Boolean(),
            nullable=False,
            server_default=sa.false(),
        ),
        sa.Column(
            "created_at",
            sa.DateTime(),
            nullable=False,
            server_default=sa.func.now(),
        ),
        sa.Column(
            "updated_at",
            sa.DateTime(),
            nullable=False,
            server_default=sa.func.now(),
        ),
        sa.ForeignKeyConstraint(
            ["customer_id"],
            ["customer.customer_id"],
        ),
        sa.PrimaryKeyConstraint("auth_id"),
        sa.UniqueConstraint("customer_id"),
        sa.UniqueConstraint("email"),
    )

    op.create_index(
        "ix_authentications_email",
        "authentications",
        ["email"],
        unique=True,
    )


def downgrade() -> None:
    # Remove authentication first because it references customer.
    op.drop_table("authentications")
    op.drop_table("customer")

    # Restore the original customer table structure.
    op.create_table(
        "customer",
        sa.Column(
            "id",
            sa.Integer(),
            autoincrement=True,
            nullable=False,
        ),
        sa.Column("full_name", sa.String(100), nullable=False),
        sa.Column("email", sa.String(150), nullable=False),
        sa.Column("phone", sa.String(15), nullable=False),
        sa.Column("hashed_password", sa.String(255), nullable=False),
        sa.Column("city", sa.String(100), nullable=True),
        sa.Column("is_active", sa.Boolean(), nullable=False),
        sa.Column(
            "created_at",
            sa.DateTime(),
            nullable=False,
            server_default=sa.text("now()"),
        ),
        sa.Column(
            "Updated_at",
            sa.DateTime(),
            nullable=False,
            server_default=sa.text("now()"),
        ),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_index(
        "ix_customer_email",
        "customer",
        ["email"],
        unique=True,
    )
