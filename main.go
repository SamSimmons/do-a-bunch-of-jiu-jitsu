package main

import (
  "net/http"
  "github.com/gorilla/mux"
)

func main() {
  r := mux.NewRouter()

  // On the default page we will simply serve our static index page.
  r.Handle("/", http.FileServer(http.Dir("./build/")))
  // We will setup our server so we can serve static assest like images, css from the /static/{file} route
  r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./build/static/"))))

  // Our application will run on port 3000. Here we declare the port and pass in our router.
  http.ListenAndServe(":3000", r)
}
