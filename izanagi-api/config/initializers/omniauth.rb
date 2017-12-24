# frozen_string_literal: true

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, Settings.github&.key, Settings.github&.secret, scope: 'user,repo'
end
