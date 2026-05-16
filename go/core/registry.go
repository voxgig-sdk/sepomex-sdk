package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCityEntityFunc func(client *SepomexSDK, entopts map[string]any) SepomexEntity

var NewMunicipalityEntityFunc func(client *SepomexSDK, entopts map[string]any) SepomexEntity

var NewStateEntityFunc func(client *SepomexSDK, entopts map[string]any) SepomexEntity

var NewZipCodeEntityFunc func(client *SepomexSDK, entopts map[string]any) SepomexEntity

