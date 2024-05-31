import * as vscode from 'vscode';
import commandExists from "command-exists";


export function activate(context: vscode.ExtensionContext) {
	// see if trunk, cargo leptos and leptosfmt exists else prompt user for permission to support


	context.subscriptions.push(
    vscode.commands.registerCommand("leptos.init", leptosInit),
    vscode.commands.registerCommand("leptos.dev", leptosDev),
    vscode.commands.registerCommand("leptos.build", leptosBuild),
    vscode.commands.registerCommand("leptos.fmt", leptosFormat)
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}


/**
 * 
 * @param args the starter template name 
 * @ creates a new leptos project
 */
function leptosInit(...args: any[]) {
	throw new Error('Function not implemented.');
}

/**
 * 
 * @param args project path 
 * run client side renderd app or server side rendered app in 
 */
function leptosDev(...args: any[]) {
	throw new Error('Function not implemented.');
}


function leptosBuild(...args: any[]) {
	throw new Error('Function not implemented.');
}

function leptosFormat(...args: any[]) {
	throw new Error('Function not implemented.');
}



function findOrInstallDependencies(){
	const dependencies  = ["cargo leptos", "trunk", "leposfmt"];
	for (const dependency in dependencies){
		if(!commandExists(dependency)){
			installDependency(dependency);
		}
	}
}


function installDependency(dependency: string) {
const isWin = process.platform === "win32";
const isDarwin = process.platform === "darwin";
const isLinux = process.platform === "linux";
}

