package main

import (
  "github.com/jinzhu/gorm"
  "fmt"

  _ "github.com/lib/pq"
)

func InitDB() {
  connectionString := "host=localhost user=postgres dbname=hours_of_jits sslmode=disable"
  var err error
  DB, err = gorm.Open("postgres", connectionString)
  if err != nil {
    panic("failed to connect to db")
  }

  fmt.Println("--DB connected--")
  if !DB.HasTable(&User{}) {
    fmt.Println("User table created")
    DB.CreateTable(&User{})
  }
  DB.AutoMigrate(&User{})
}
