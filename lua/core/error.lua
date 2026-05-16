-- Sepomex SDK error

local SepomexError = {}
SepomexError.__index = SepomexError


function SepomexError.new(code, msg, ctx)
  local self = setmetatable({}, SepomexError)
  self.is_sdk_error = true
  self.sdk = "Sepomex"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function SepomexError:error()
  return self.msg
end


function SepomexError:__tostring()
  return self.msg
end


return SepomexError
