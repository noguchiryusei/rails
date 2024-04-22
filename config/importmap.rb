# Pin npm packages by running ./bin/importmap

pin "application"
pin "vue@3", to: "https://cdn.skypack.dev/vue@3", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
