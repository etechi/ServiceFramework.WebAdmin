import * as React from 'react';
import { render } from 'react-dom'
import { Route } from 'react-router'
import {BrowserRouter} from 'react-router-dom'

//import * as  formItemAdjuster  from "./formItemAdjuster";

import * as WA from "SF/webadmin";
//import * as assign from "SF/utils/assign";
import * as Meta from "SF/utils/Metadata";
import * as ApiMeta from "SF/utils/ApiMeta";
import * as ApiFormManager from "SF/components/webapi/ApiFormManager";
import * as  ApiTableManager  from "SF/components/webapi/ApiTableManager";
import { setup as setupEntityLinkBuilder } from "SF/utils/EntityLinkBuilder";
import * as apicall from "SF/utils/apicall";
import {createBrowserHistory} from 'history';
var browserHistory=createBrowserHistory();
// import * as  superagent from "superagent";
// import * as base64 from "SF/utils/base64"

// var sa=superagent
//     .post("/connect/token")
//     .type('form')
//     .set("Authorization","Basic "+base64.encode( "admin.console:system"))
//     .send({
//         grant_type:'password',
//         username:'sysadmin',
//         password:'system',
//         scope:'all'
//     })
//     .end(e=>{


// });

import  AppFrame from "./components/AppFrame";

// declare var require: any;
var env = (window as any)["ENV"] || {root:"",menu:"default"};

// function init(
//     lib: ApiMeta.Library,
//     menuItems: any,
//     permissions: any//api.ServiceProtocol$Auth$Permission[]
// ) {
//     //var modules=require("./modules").default;
//     var config = require("./config");
//     var Dashboard = require("./components/Dashboard").default;
//     var SigninPage = require("./components/SigninPage").default;

//     ApiMeta.setDefaultLibrary(lib);

//     var apiForms = new ApiFormManager.ApiFormManager(lib, null);//formItemAdjuster.itemAdjuster);
//     //modules.filter(m => m.api && m.api.forms ? true : false).forEach(m =>
//     //    m.api.forms.forEach(f => apiForms.createForm(f))
//     //);
//     ApiFormManager.setDefaultFormManager(apiForms);

    
//     config.build(lib,env.root, permissions, menuItems, window.location.href.indexOf("all=true")!=-1);

 
//     //const module_routes = modules.map(m => m.route);
//     setupEntityLinkBuilder([config.ManagerBuildResult.entityLinkBuilders], env.root);

//     var tm = new ApiTableManager.ApiTableManager(apiForms);
//     //modules.filter(m => m.api && m.api.queries ? true : false).forEach(m =>
//     //    m.api.queries.forEach(f => tm.createTable(f))
//     //);
//     ApiTableManager.setDefaultTableManager(tm);

//     //var reducer = (state, action) => {
//     //    if (state === void 0) { state = []; }
//     //    switch (action.type) {
//     //        default:
//     //            return state;
//     //    }
//     //};
//     //var form_normalizers = assign(
//     //    apiForms.normalizer(),
//     //    settingForms.normalizer()
//     //    );
//     //var reducers = combineReducers({
//     //    reducer: reducer,
//     //    //form:  formReducer.normalize(form_normalizers),
//     //});
//     //var store = createStore(reducers);

//     const chd_routes = [
//         <Route key="dashboard" path="/" component={Dashboard}/>,
//         <Route key="signin" path="/signin" component={SigninPage}/>
//     ];

//     // const routes = 
//     //     <Route render={({location})=>
//     //         <AppFrame location={location}>
//     //         {/*<Route exact  onEnter={(nextState:any, transition:any) => {transition(env.root+'dashboard');}}/>*/}
//     //         {chd_routes
//     //         //.concat(config.ManagerBuildResult.entityRoutes)
//     //         //.concat(config.ManagerBuildResult.formRoutes)
//     //         .concat(
//     //             config.ManagerBuildResult.routes
//     //         )
//     //         .concat([
//     //         //{
//     //         //    path: "entity/:type/*",
//     //         //    onEnter: (nextState, transition) => {
//     //         //        var { location, params } = nextState;
//     //         //        var builder = entityMap[params.type];
//     //         //        if (!builder) return;
//     //         //        var to = "/admin/" + builder.apply(null, params.splat.split('/'));
//     //         //        transition(to);
//     //         //    }
//     //         //}
//     //     ])}
//     //     </AppFrame>
//     //     }/>
//     // ;
   
    

// }
// Promise.all([
//     apicall.call("ServiceMetadata","Json"),
//     apicall.call("Menu","GetMenu",{Ident:env.menu}),

//     //api.User.GetPermissions() 
// ]).then(re => {
//     var lib = new ApiMeta.Library(re[0] as any);
//     var items = re[1];
//     var permissions = re[2];
//     init(lib, items,permissions);
// });


function main(){


    render(
    <BrowserRouter basename={env.root}>
        <Route component={AppFrame}/>
    </BrowserRouter>
    , document.getElementById('root'))

}

main();








function removeQuery(s: string) {
    if (!s) return s;
    var i = s.indexOf('?');
    return i == -1 ? s : s.substring(0, i);
}

browserHistory.listen(l => {
    //var loc = window.location.href;
    //var re = loc.match(/^https?:\/\/[^\/]+\/admin\/[^\/]+\/([^\/]+)$/);
    //var res = removeQuery(re && re[1]);
    //if (re && res) {
    //    api.AuditService.AddRecord({
    //        Resource: decodeURIComponent(res),
    //        Operation: "查询"
    //    });
    //    return;
    //}

    //var re = loc.match(/^https?:\/\/[^\/]+\/admin\/[^\/]+\/([^\/]+)\/([^\/]+)\/([^\/]+)$/);
    //var id = removeQuery(re && re[3]);
    //if (re && id) {
    //    api.AuditService.AddRecord({
    //        DestId: decodeURIComponent(re[1]) + "-" + decodeURIComponent(id),
    //        Resource: decodeURIComponent(re[1]),
    //        Operation: "浏览"
    //    });
    //    return;
    //}
});
