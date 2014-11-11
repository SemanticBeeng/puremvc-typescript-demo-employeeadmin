import _root_.sbt.Keys._
import _root_.sbt._

logLevel := Level.Warn

resolvers += "Typesafe repository" at "http://repo.typesafe.com/typesafe/releases/"

addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.3.6")

resolvers += "Sonatype OSS Snapshots Repository" at "http://oss.sonatype.org/content/groups/public"

//addSbtPlugin("com.github.mumoshu" % "play2-typescript" % "0.3.0-RC1" changing())
