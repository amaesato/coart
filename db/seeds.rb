
u = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, 
                email: 'dev4@art.com', password: 'password', 
                username: Faker::Internet.user_name)

u.profile.update(bio: Faker::Lorem.paragraph, zip_code: Faker::Address.zip_code, 
                        inspirations: Faker::Lorem.sentence)

true_false = [true, false]
30.times do
  u.profile.projects.create!(name: Faker::Name.name, description: Faker::Lorem.paragraph,
                             collab: true_false.sample, active: true_false.sample)
end

puts 'User, Profile, and Projects Seeded!'