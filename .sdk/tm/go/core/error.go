package core

type SepomexError struct {
	IsSepomexError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewSepomexError(code string, msg string, ctx *Context) *SepomexError {
	return &SepomexError{
		IsSepomexError: true,
		Sdk:              "Sepomex",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *SepomexError) Error() string {
	return e.Msg
}
