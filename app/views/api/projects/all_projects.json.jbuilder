json.array! @projects do |project|
  json.id project.id
  json.active project.active
  json.collab project.collab
  json.description project.description
  json.profile_id project.profile_id
  json.name project.name
  json.created_at project.created_at
  json.project_user project.profile.user_id
end