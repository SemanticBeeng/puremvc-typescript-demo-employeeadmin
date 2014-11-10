import _root_.com.github.mumoshu.play2.typescript.TypeScriptPlugin._
import _root_.sbt.Build
import _root_.sbt.Keys
import sbt._
import Keys._
import play.Project._
import com.github.mumoshu.play2.typescript.TypeScriptPlugin._

object ApplicationBuild extends Build {

  val appName         = "sample"
  val appVersion      = "1.0-SNAPSHOT"

  val appDependencies = Seq(
    // Add your project dependencies here,
  )

  val main = play.Project(appName, appVersion, appDependencies)
    .settings(typescriptSettings: _*)
    .settings(
      tsOptions ++= Seq("--sourcemap ")
    )

}
