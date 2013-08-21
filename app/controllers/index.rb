get '/' do
  erb :index
end

get '/skills/:skill' do
  @skill = params[:skill]
  erb :skills
end

get '/meals' do
  @meals = ["Spaghetti",
            "Ravioli",
            "Hummus and Veggies",
            "Pizza",
            "Falafel",
            "Sushi",
            "Linguini",
            "Onigilli"]
  @meal = @meals[rand(0..8)]
  erb :meals
end


