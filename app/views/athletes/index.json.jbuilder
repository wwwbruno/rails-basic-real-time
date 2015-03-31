json.array!(@athletes) do |athlete|
  json.extract! athlete, :id, :name, :email, :category
  json.url athlete_url(athlete, format: :json)
end
