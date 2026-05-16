package voxgigsepomexsdk

import (
	"github.com/voxgig-sdk/sepomex-sdk/core"
	"github.com/voxgig-sdk/sepomex-sdk/entity"
	"github.com/voxgig-sdk/sepomex-sdk/feature"
	_ "github.com/voxgig-sdk/sepomex-sdk/utility"
)

// Type aliases preserve external API.
type SepomexSDK = core.SepomexSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type SepomexEntity = core.SepomexEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type SepomexError = core.SepomexError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCityEntityFunc = func(client *core.SepomexSDK, entopts map[string]any) core.SepomexEntity {
		return entity.NewCityEntity(client, entopts)
	}
	core.NewMunicipalityEntityFunc = func(client *core.SepomexSDK, entopts map[string]any) core.SepomexEntity {
		return entity.NewMunicipalityEntity(client, entopts)
	}
	core.NewStateEntityFunc = func(client *core.SepomexSDK, entopts map[string]any) core.SepomexEntity {
		return entity.NewStateEntity(client, entopts)
	}
	core.NewZipCodeEntityFunc = func(client *core.SepomexSDK, entopts map[string]any) core.SepomexEntity {
		return entity.NewZipCodeEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewSepomexSDK = core.NewSepomexSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
