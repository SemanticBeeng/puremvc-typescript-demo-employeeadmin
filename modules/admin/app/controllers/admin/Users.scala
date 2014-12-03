package controllers.admin

import controllers.common.RenderMultipleFormats
import model.admin.{DeptEnumValues, User}
import play.api.libs.json.{JsString, Writes, Json}
import play.api.mvc.Action

/**
 *
 */
object Users extends RenderMultipleFormats[User] {


  def list = Action { implicit request =>
    render {
      //case Accepts.Html() => Ok(views.html.users.list(User.list))
      case Accepts.Json() => Ok(Json.toJson(makeMockList))
    }
  }

  private def makeMockList: Array[User] = {
    Array[User](
      new User("lstooge", "Larry", "Stooge", "larry@stooges.com", "ijk456", DeptEnumValues.ACCT),
      new User("cstooge", "Curly", "Stooge", "curly@stooges.com", "xyz987", DeptEnumValues.SALES),
      new User("mstooge", "Moe", "Stooge", "moe@stooges.com", "abc123", DeptEnumValues.PLANT)
    )
  }

  implicit val userWrites = new Writes[User] {
    def writes(user: User) = {
      Json.obj(
        "uname" -> JsString(user.uname),
        "lastName" -> JsString(user.lname))
    }
  }

//  uname: String, fname:String, lname:String, email:String, password:String, department
//  val extendedCustomerWrites = new Writes[Customer] {
//    def writes(customer: Customer) = {
//      customerrites.writes(customer) /*+ ("contacts" -> Writes.seq(contactWrites).writes(user.contacts))*/
//    }
//  }

  //  val contactWrites = new Writes[Contact] {
  //    def writes(contact: Contact) = {
  //      Json.obj(
  //        "id" -> JsNumber(contact.id.get),
  //        "contactType" -> JsString(contact.contactType),
  //        "contact" -> JsString(contact.contact))
  //    }
  //  }

}
