JSONAPI.configure do |config|
  config.json_key_format = :camelized_key
  config.default_paginator = :offset
end