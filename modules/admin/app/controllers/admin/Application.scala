package controllers.admin

import controllers.common.JsRouteGenerator
import play.api.mvc._
import controllers.admin.routes._

object Application extends JsRouteGenerator[javascript] {

  def index = Action { implicit request =>
    //val computers = List("A", "B")//Computer.list
    Ok(views.html.admin.index(/*"Hello! I'm the ADMIN!" computers*/))
  }

  def startSessionWithUserAndCustomer(userId: String, customerId: String, authenticatedToken: String) = Action {
    implicit request =>
      Ok(views.html.admin.index())
  }
}