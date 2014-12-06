package model.customerMgmt

import play.api.libs.json._

/**
 *
 */
case class Customer(firstName: String, lastName: String, contacts: List[EmailAddress]) {
}

//case class Contact()

case class EmailAddress(address: String) /*extends Contact*/ {
}

object EmailAddress {
  implicit val emailAddressFormat = Json.format[EmailAddress]
}

case class PhoneNumber(prefix: String, number: String, extension: String) /*extends Contact*/ {
}

object PhoneNumber {
  implicit val phoneNumberFormat = Json.format[PhoneNumber]
}

object Customer {

  implicit val customerFormat = Json.format[Customer]
//  implicit val customersFormat = Json.format[List[Customer]]

  def someCustomers: List[Customer] = {

    val contacts = List(EmailAddress("joe@smith.com"))
    List(Customer("Joe", "Smith", List()), Customer("Oliver", "Twist", contacts))
  }

}



//object Formats {
//  implicit val customersFormat = Json.format[List[Customer]]
//  implicit val customerFormat = Json.format[Customer]
//  implicit val emailAddressFormat = Json.format[EmailAddress]
//  implicit val phoneNumberFormat = Json.format[PhoneNumber]
//
//}

//implicit val customerWrite = {
//import play.api.libs.json.Writes.path._
//(
//at[String](__ \ "firstName") and
//at[String](__ \ "lastName") and
//at[Option[List[model.customerMgmt.Contact]]](__ \ "contacts")
//)(unlift(Customer.unapply))
//}
