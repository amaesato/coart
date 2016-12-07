json.array! @profiles do |profile|
  json.id profile.id
  json.bio profile.bio
  json.zip_code profile.zip_code
  json.inspirations profile.inspirations
  json.url api_profile_url(profile)
  json.image_url profile.image_url
    json.user do
      user = profile.user
      json.username user.username
      json.email user.email
      json.first_name user.first_name
      json.last_name user.last_name
    end
    json.categories do
      json.music profile.category.music
      json.photography profile.category.photography
      json.videography profile.category.videography
      json.muralist profile.category.muralist
      json.painting profile.category.painting
      json.drawing profile.category.drawing
      json.sculpture profile.category.sculpture
      json.graphic_design profile.category.graphic_design
      json.performance profile.category.performance
      json.literature profile.category.literature
      json.hand_made profile.category.hand_made
    end
end
