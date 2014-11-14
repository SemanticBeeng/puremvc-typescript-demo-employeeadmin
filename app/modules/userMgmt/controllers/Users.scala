package modules.userMgmt.controllers

import controllers.common.RenderMultipleFormats
import modules.userMgmt.model.Customer
import play.api.data.Forms._
import play.api.data._
import play.api.libs.json._
import play.api.mvc._

object Users extends RenderMultipleFormats[Customer] {

//  val form = Form(
//    mapping(
//      "id" -> ignored(NotAssigned: Pk[Int]),
//      "username" -> nonEmptyText,
//      "age" -> number)(User.apply)(User.unapply))
//
//  def list = Action { implicit request =>
//    render {
//      case Accepts.Html() => Ok(views.html.users.list(User.list))
//      case Accepts.Json() => Ok(Json.toJson(User.list))
//    }
//  }

  implicit val userWrites = new Writes[Customer] {
    def writes(customer: Customer) = {
      Json.obj(
        "firstName" -> JsString(customer.firstName),
        "lastName" -> JsString(customer.lastName))
    }
  }
  
  val extendedUserWrites = new Writes[Customer] {
    def writes(customer: Customer) = {
      userWrites.writes(customer) /*+ ("contacts" -> Writes.seq(contactWrites).writes(user.contacts))*/
    }
  }

//  val contactWrites = new Writes[Contact] {
//    def writes(contact: Contact) = {
//      Json.obj(
//        "id" -> JsNumber(contact.id.get),
//        "contactType" -> JsString(contact.contactType),
//        "contact" -> JsString(contact.contact))
//    }
//  }
  
  def find(name: String) = Action { implicit request =>
//    User.load(id).map { user =>
//    render {
//      case Accepts.Html() => Ok(views.html.users.show(user))
//      case Accepts.Json() => Ok(Json.toJson(user)(extendedUserWrites))
//    }
//    }.getOrElse(NotFound)
    NotFound
  }
  
//  def add = Action {
//    Ok(views.html.users.add(form))
//  }

//  def save = Action { implicit request =>
//    form.bindFromRequest.fold(
//      formWithErrors => handleError(formWithErrors, views.html.users.add(formWithErrors)),
//      user => {
//        User.save(user)
//        handleSuccess(routes.Users.list, "User successfully created!")
//      })
//  }
//
//  def edit(id: Int) = Action {
//    User.load(id).map { user =>
//      val bindedForm = form.fill(user)
//      Ok(views.html.users.edit(id, bindedForm))
//    }.getOrElse(NotFound)
//  }
//
//  def update(id: Int) = Action { implicit request =>
//    User.load(id).map { user =>
//      form.bindFromRequest.fold(
//      formWithErrors => handleError(formWithErrors,views.html.users.edit(id, formWithErrors)),
//        userWithNewValues => {
//          User.update(id, userWithNewValues)
//          handleSuccess(routes.Users.show(id), "User successfully updated!")
//        })
//    }.getOrElse(NotFound)
//  }
//
//  def delete(id: Int) = Action { implicit request =>
//    User.delete(id)
//    handleSuccess(routes.Users.list, "User successfully deleted!")
//  }
}