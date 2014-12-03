package model.admin


/**
 *
 */
case class User(uname: String,
                 fname: String,
                 lname: String,
                 email: String,
                 password: String,
                 department: DeptEnum)

//object User {
//
//  import play.api.libs.json._
//  import play.api.libs.functional.syntax._
//
//  implicit val UserFromJson: Reads[User] = (
//    (__ \ "uname").read[String] ~
//      (__ \ "fname").read[String] ~
//      (__ \ "lname").read[String] ~
//      (__ \ "email").read[String] ~
//      (__ \ "password").read[String]
//    )(User.apply _)
//
//  implicit val UserToJson: Writes[User] = (
//    (__ \ "uname").write[String] ~
//      (__ \ "fname").write[String] ~
//      (__ \ "lname").write[String] ~ // don't write the password
//      (__ \ "email").write[String] ~
//      (__ \ "password").write[String] ~
//
//    )((user: User) => (
//    user.uname,
//    user.fname,
//    user.lname,
//    user.email,
//    user.password
//    ))
//}


//import play.api.libs.json._
//import play.api.libs.json.Reads._
//
//class T {
//  def test(): Unit = {
//
//    val jsonTransformer = (__ \ 'key2).json.pickBranch(
//      (__ \ 'key21).json.update(
//        of[JsNumber].map { case JsNumber(nb) => JsNumber(nb + 10)}
//      ) andThen
//        (__ \ 'key23).json.update(
//          of[JsArray].map { case JsArray(arr) => JsArray(arr :+ JsString("delta"))}
//        )
//    )
//
//    val rulex = Rules
//  }
//}
//
