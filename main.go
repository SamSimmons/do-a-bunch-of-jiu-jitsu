package main

import (
  "encoding/json"
  "encoding/base64"
  "net/http"
  "os"
  "log"
  // "fmt"
  "strconv"
  "github.com/gorilla/handlers"
  "github.com/gorilla/mux"
  "github.com/auth0/go-jwt-middleware"
  "github.com/dgrijalva/jwt-go"
  "github.com/joho/godotenv"
)

func main() {
  err := godotenv.Load()
  if err != nil {
    log.Fatal("Error loading .env file")
  }

  r := mux.NewRouter()

  // On the default page we will simply serve our static index page.
  r.Handle("/", http.FileServer(http.Dir("./build/")))
  // We will setup our server so we can serve static assest like images, css from the /static/{file} route
  r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./build/static/"))))

  r.Handle("/status", StatusHandler).Methods("GET")
  r.Handle("/user", jwtMiddleware.Handler(UserHandler)).Methods("GET")
  // r.Handle("/user", UserHandler).Methods("GET")
  r.Handle("/add-time", AddHoursHandler).Methods("POST")
  r.Handle("/register", NotImplemented).Methods("POST")

  // Our application will run on port 3000. Here we declare the port and pass in our router.
  loggedRouter := handlers.LoggingHandler(os.Stdout, r)
  http.ListenAndServe(":4000", loggedRouter)
}

type User struct {
  Id int `json:"id"`
  Name string `json:"name"`
  Email string `json:"email"`
  HoursLeft string `json:"hoursLeft"`
  HoursComplete string `json:"hoursComplete"`
  HoursGoal string `json:"hoursGoal"`
}

type Hours struct {
  Hours string `json:"hours"`
}

var user = User{
  Id: 1,
  Name: "Bob Smith",
  Email: "bob@email.com",
  HoursLeft: "250",
  HoursComplete: "50",
  HoursGoal: "300",
}


var StatusHandler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
  w.Write([]byte("API is up and running"))
})

var UserHandler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
  payload, _ := json.Marshal(user)
  w.Header().Set("Content-Type", "application/json")
  w.Header().Set("Access-Control-Allow-Origin", "*")
  w.Write([]byte(payload))
})

var AddHoursHandler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
  decoder := json.NewDecoder(r.Body)
  var h Hours
  err := decoder.Decode(&h)
  if err != nil { panic(err) }
  newHours, _ := strconv.ParseFloat(h.Hours, 64)
  oldHoursLeft, _ := strconv.ParseFloat(user.HoursLeft, 64)
  oldHoursComplete, _ := strconv.ParseFloat(user.HoursComplete, 64)

  user.HoursComplete = strconv.FormatFloat(newHours + oldHoursComplete, 'f', -1, 64)
  user.HoursLeft = strconv.FormatFloat(oldHoursLeft - newHours, 'f', -1, 64)
  payload, _ := json.Marshal(user)
  w.Header().Set("Content-Type", "application/json")
  w.Header().Set("Access-Control-Allow-Origin", "*")
  w.Write([]byte(payload))
})

var jwtMiddleware = jwtmiddleware.New(jwtmiddleware.Options{
  ValidationKeyGetter: func(token *jwt.Token) (interface{}, error) {
    decoded, err := base64.URLEncoding.DecodeString(os.Getenv("AUTH0_CLIENT_SECRET"))
    if err != nil {
      return nil, err
    }
    return decoded, nil
  },
})

var NotImplemented = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
  w.Write([]byte("Not Implemented"))
})
