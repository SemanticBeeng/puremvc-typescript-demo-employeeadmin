import _root_.sbt.Keys._
import _root_.sbt._

logLevel := Level.Warn

resolvers += "Typesafe repository" at "http://repo.typesafe.com/typesafe/releases/"

//resolvers += "Sonatype OSS Snapshots Repository" at "http://oss.sonatype.org/content/groups/public"

//@todo addSbtPlugin("com.github.mumoshu" % "play2-typescript" % "0.3.0-RC1" changing())

//addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.2.3")

addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.3.6")

//addSbtPlugin("com.typesafe.sbt" % "sbt-web" % "1.1.2-SNAPSHOT")


//@todo addSbtPlugin("com.typesafe.sbt" % "sbt-rjs" % "1.0.4")

//@todo addSbtPlugin("com.typesafe.sbt" % "sbt-digest" % "1.0.0")

//@todo addSbtPlugin("com.typesafe.sbt" % "sbt-gzip" % "1.0.0")

//todo addSbtPlugin("com.typesafe.sbt" % "sbt-jshint" % "1.0.1")
//
//todo addSbtPlugin("com.typesafe.sbt" % "sbt-less" % "1.0.0")

