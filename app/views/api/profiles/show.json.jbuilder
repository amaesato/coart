json.profile do
  json.id @profile.id
  json.bio @profile.bio
  json.zip_code @profile.zip_code
  json.inspirations @profile.inspirations
  json.url api_profile_url(@profile)
  json.image_url @profile.image_url
  json.youtube @profile.youtube
  json.vimeo @profile.vimeo
  json.soundcloud @profile.soundcloud
  json.twitter @profile.twitter
  json.facebook @profile.facebook
  json.tumbler @profile.tumbler
  json.instagram @profile.instagram
  json.other @profile.other
  json.categories do
    json.music @profile.category.music
    json.photography @profile.category.photography
    json.videography @profile.category.videography
    json.muralist @profile.category.muralist
    json.painting @profile.category.painting
    json.drawing @profile.category.drawing
    json.sculpture @profile.category.sculpture
    json.graphic_design @profile.category.graphic_design
    json.performance @profile.category.performance
    json.literature @profile.category.literature
    json.hand_made @profile.category.hand_made
  end
end

json.user do
  user = @profile.user
  json.username user.username
  json.email user.email
  json.first_name user.first_name
  json.last_name user.last_name
end

json.conversations @conversations do |conversation|
  json.id conversation.id
  json.subject conversation.subject
  json.body conversation.body
end

json.messages @messages do |message|
  json.id message.id
  json.body message.body
end
