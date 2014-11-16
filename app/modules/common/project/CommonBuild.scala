import com.typesafe.sbt.web.Import.WebKeys
import sbt.Keys._
import sbt._

/**
 *
 */
object CommonBuild extends Build {

  // this does not take effect ?? scalaVersion := "2.11.2"

  val moduleName = "PureMVC-TypeScript-Play-Demo-EmployeeAdmin-common"
  val moduleVersion = "1.0-SNAPSHOT"

  val dependencies = Seq(
    //cache,
    "org.webjars" %% "webjars-play" % "2.3.0-2"
  )


  val common = Project(moduleName, file(".")).enablePlugins(play.PlayScala).settings(

    version := moduleVersion,
    libraryDependencies ++= dependencies

  )


}
