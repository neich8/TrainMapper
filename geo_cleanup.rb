require 'json'
require 'pry'

file = File.read('CTA_RailLines.json')
json = JSON.parse(file)
print json["features"]
clean = json["features"].each do |f|
  f["properties"]["description"] = ""
end

File.open("cta_rails.json", "w") do |f|
  f.write(clean.to_json)
end