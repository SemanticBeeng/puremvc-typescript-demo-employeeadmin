package model.admin

object DeptEnumValues {
  //val NONE_SELECTED = DeptEnum( "Select a department", -1 )
  val ACCT = new DeptEnum("Accounting", 0)
  val SALES = new DeptEnum("Sales", 1)
  val PLANT = new DeptEnum("Plant", 2)
  val SHIPPING = new DeptEnum("Shipping", 3)
  val QC = new DeptEnum("Quality Control", 4)


}

/**
 *
 */
case class DeptEnum(value: String, ordinal: Int) {
}
