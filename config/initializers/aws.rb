if Rails.env.development? || Rails.env.test?
  aws = "#{Rails.root}/config/aws.yml"
  if File.exists? aws
    config = YAML.load_file(aws)
    config.each { |key, value| ENV[key] = value.to_s}
  else
    raise "Missing config/aws.yml"
  end
end
