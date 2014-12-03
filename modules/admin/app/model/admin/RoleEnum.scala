package model.admin

object RoleEnum {

  val NONE_SELECTED: RoleEnum = new RoleEnum("Select a role", -1)
  val ADMIN: RoleEnum = new RoleEnum("Administrator", 0)
  val ACCT_PAY: RoleEnum = new RoleEnum("Accounts Payable", 1)
  val ACCT_RCV: RoleEnum = new RoleEnum("Accounts Receivable", 2)
  val EMP_BENEFITS: RoleEnum = new RoleEnum("Employee Benefits", 3)
  val GEN_LEDGER: RoleEnum = new RoleEnum("General Ledger", 4)
  val PAYROLL: RoleEnum = new RoleEnum("Payroll", 5)
  val INVENTORY: RoleEnum = new RoleEnum("Inventory", 6)
  val PRODUCTION: RoleEnum = new RoleEnum("Production", 7)
  val QUALITY_CTL: RoleEnum = new RoleEnum("Quality Control", 8)
  val SALES: RoleEnum = new RoleEnum("Sales", 9)
  val ORDERS: RoleEnum = new RoleEnum("Orders", 10)
  val CUSTOMERS: RoleEnum = new RoleEnum("Customers", 11)
  val SHIPPING: RoleEnum = new RoleEnum("Shipping", 12)
  val RETURNS: RoleEnum = new RoleEnum("Returns", 13)

}

/**
 *
 */
case class RoleEnum(value: String, ordinal: Int) {
}
