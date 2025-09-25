package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/windows"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:     "#Main Window",
		MinWidth:  1200,
		MinHeight: 800,
		// Width:         1200,
		// Height:        800,
		// DisableResize: true, // 禁止缩放
		Frameless: true, // 无边框
		// AlwaysOnTop: true, // 置顶
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 0, G: 0, B: 0, A: 0},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
		},
		Windows: &windows.Options{
			WebviewIsTransparent:              true, // 浏览器透明
			WindowIsTranslucent:               true, // 窗口透明
			DisableFramelessWindowDecorations: true, // 禁用无边框
			// ZoomFactor:                        0.5,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
