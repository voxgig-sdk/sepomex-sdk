package = "voxgig-sdk-sepomex"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/sepomex-sdk.git"
}
description = {
  summary = "Sepomex SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["sepomex_sdk"] = "sepomex_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
