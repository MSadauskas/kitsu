(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ee0a6d2"],{"014b":function(e,t,r){"use strict";var i=r("e53d"),n=r("07e3"),s=r("8e60"),a=r("63b6"),o=r("9138"),c=r("ebfd").KEY,d=r("294c"),u=r("dbdb"),l=r("45f2"),m=r("62a0"),v=r("5168"),h=r("ccb9"),f=r("6718"),w=r("47ee"),p=r("9003"),k=r("e4ae"),P=r("f772"),T=r("241e"),g=r("36c3"),b=r("1bc3"),y=r("aebd"),C=r("a159"),_=r("0395"),x=r("bf0b"),E=r("9aa9"),O=r("d9f6"),S=r("c3a1"),I=x.f,D=O.f,$=_.f,j=i.Symbol,F=i.JSON,M=F&&F.stringify,A="prototype",L=v("_hidden"),N=v("toPrimitive"),V={}.propertyIsEnumerable,R=u("symbol-registry"),B=u("symbols"),J=u("op-symbols"),W=Object[A],K="function"==typeof j&&!!E.f,U=i.QObject,z=!U||!U[A]||!U[A].findChild,H=s&&d((function(){return 7!=C(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a}))?function(e,t,r){var i=I(W,t);i&&delete W[t],D(e,t,r),i&&e!==W&&D(W,t,i)}:D,Y=function(e){var t=B[e]=C(j[A]);return t._k=e,t},G=K&&"symbol"==typeof j.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof j},Q=function(e,t,r){return e===W&&Q(J,t,r),k(e),t=b(t,!0),k(r),n(B,t)?(r.enumerable?(n(e,L)&&e[L][t]&&(e[L][t]=!1),r=C(r,{enumerable:y(0,!1)})):(n(e,L)||D(e,L,y(1,{})),e[L][t]=!0),H(e,t,r)):D(e,t,r)},q=function(e,t){k(e);var r,i=w(t=g(t)),n=0,s=i.length;while(s>n)Q(e,r=i[n++],t[r]);return e},X=function(e,t){return void 0===t?C(e):q(C(e),t)},Z=function(e){var t=V.call(this,e=b(e,!0));return!(this===W&&n(B,e)&&!n(J,e))&&(!(t||!n(this,e)||!n(B,e)||n(this,L)&&this[L][e])||t)},ee=function(e,t){if(e=g(e),t=b(t,!0),e!==W||!n(B,t)||n(J,t)){var r=I(e,t);return!r||!n(B,t)||n(e,L)&&e[L][t]||(r.enumerable=!0),r}},te=function(e){var t,r=$(g(e)),i=[],s=0;while(r.length>s)n(B,t=r[s++])||t==L||t==c||i.push(t);return i},re=function(e){var t,r=e===W,i=$(r?J:g(e)),s=[],a=0;while(i.length>a)!n(B,t=i[a++])||r&&!n(W,t)||s.push(B[t]);return s};K||(j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var e=m(arguments.length>0?arguments[0]:void 0),t=function(r){this===W&&t.call(J,r),n(this,L)&&n(this[L],e)&&(this[L][e]=!1),H(this,e,y(1,r))};return s&&z&&H(W,e,{configurable:!0,set:t}),Y(e)},o(j[A],"toString",(function(){return this._k})),x.f=ee,O.f=Q,r("6abf").f=_.f=te,r("355d").f=Z,E.f=re,s&&!r("b8e3")&&o(W,"propertyIsEnumerable",Z,!0),h.f=function(e){return Y(v(e))}),a(a.G+a.W+a.F*!K,{Symbol:j});for(var ie="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;ie.length>ne;)v(ie[ne++]);for(var se=S(v.store),ae=0;se.length>ae;)f(se[ae++]);a(a.S+a.F*!K,"Symbol",{for:function(e){return n(R,e+="")?R[e]:R[e]=j(e)},keyFor:function(e){if(!G(e))throw TypeError(e+" is not a symbol!");for(var t in R)if(R[t]===e)return t},useSetter:function(){z=!0},useSimple:function(){z=!1}}),a(a.S+a.F*!K,"Object",{create:X,defineProperty:Q,defineProperties:q,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:re});var oe=d((function(){E.f(1)}));a(a.S+a.F*oe,"Object",{getOwnPropertySymbols:function(e){return E.f(T(e))}}),F&&a(a.S+a.F*(!K||d((function(){var e=j();return"[null]"!=M([e])||"{}"!=M({a:e})||"{}"!=M(Object(e))}))),"JSON",{stringify:function(e){var t,r,i=[e],n=1;while(arguments.length>n)i.push(arguments[n++]);if(r=t=i[1],(P(t)||void 0!==e)&&!G(e))return p(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!G(t))return t}),i[1]=t,M.apply(F,i)}}),j[A][N]||r("35e8")(j[A],N,j[A].valueOf),l(j,"Symbol"),l(Math,"Math",!0),l(i.JSON,"JSON",!0)},"0395":function(e,t,r){var i=r("36c3"),n=r("6abf").f,s={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(e){try{return n(e)}catch(t){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==s.call(e)?o(e):n(i(e))}},"224c":function(e,t,r){},"355d":function(e,t){t.f={}.propertyIsEnumerable},"47ee":function(e,t,r){var i=r("c3a1"),n=r("9aa9"),s=r("355d");e.exports=function(e){var t=i(e),r=n.f;if(r){var a,o=r(e),c=s.f,d=0;while(o.length>d)c.call(e,a=o[d++])&&t.push(a)}return t}},"5d58":function(e,t,r){e.exports=r("d8d6")},6718:function(e,t,r){var i=r("e53d"),n=r("584a"),s=r("b8e3"),a=r("ccb9"),o=r("d9f6").f;e.exports=function(e){var t=n.Symbol||(n.Symbol=s?{}:i.Symbol||{});"_"==e.charAt(0)||e in t||o(t,e,{value:a.f(e)})}},"67bb":function(e,t,r){e.exports=r("f921")},"69d3":function(e,t,r){r("6718")("asyncIterator")},"6abf":function(e,t,r){var i=r("e6f3"),n=r("1691").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,n)}},"765d":function(e,t,r){r("6718")("observable")},"77f10":function(e,t,r){},"99a3":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page fixed-page"},[r("div",{staticStyle:{"overflow-y":"auto"}},[r("div",{staticClass:"page-header"},[e.currentTask?r("div",{staticClass:"flexrow header-title"},[r("router-link",{staticClass:"flexrow-item has-text-centered back-link",attrs:{to:e.entityPage}},[r("chevron-left-icon")],1),r("div",{staticClass:"title flexrow-item"},[r("router-link",{attrs:{to:e.taskEntityPath}},[e._v("\n          "+e._s(e.currentTask?e.title:"Loading...")+"\n        ")])],1),e.currentTaskType?r("task-type-name",{staticClass:"flexrow-item task-type",attrs:{"task-type":e.currentTaskType,"production-id":e.currentProduction.id}}):e._e(),e.isAssigned?e._e():r("subscribe-button",{staticClass:"flexrow-item action-button",attrs:{subscribed:e.isAssigned||e.isSubscribed},on:{click:e.toggleSubscribe}})],1):e._e(),e.currentTask?r("div",{staticClass:"flexrow task-information"},[r("span",{staticClass:"flexrow-item"},[e._v(e._s(e.$t("tasks.current_status")))]),e.currentTask?r("validation-tag",{staticClass:"is-medium flexrow-item",attrs:{task:e.currentTask,"is-static":!0}}):e._e(),r("span",{staticClass:"flexrow-item"},[e._v(e._s(e.$t("tasks.fields.assignees"))+":")]),e._l(e.currentTask.assignees,(function(t){return r("span",{key:t,staticClass:"flexrow-item avatar-wrapper"},[r("people-avatar",{key:t,staticClass:"flexrow-item",attrs:{person:e.personMap[t],size:30,"font-size":16}})],1)}))],2):e._e()]),r("div",{ref:"task-columns",staticClass:"task-columns"},[r("div",{staticClass:"task-column comments-column"},[e.currentTask?r("div",[r("div",[e.isCommentingAllowed?r("add-comment",{attrs:{"is-loading":e.loading.addComment,"is-error":e.errors.addComment,user:e.user,team:e.currentTeam,task:e.currentTask,"task-status":e.taskStatusForCurrentUser,"attached-file-name":e.attachedFileName},on:{"add-comment":e.addComment,"add-preview":e.onAddPreviewClicked,"file-drop":e.selectFile}}):e._e(),e.currentTaskComments&&e.currentTaskComments.length>0?r("div",{staticClass:"comments"},e._l(e.currentTaskComments,(function(t,i){return r("comment",{key:t.id,attrs:{comment:t,highlighted:e.isHighlighted(t),"current-user":e.user,editable:t.person&&e.user.id===t.person.id,"is-last":i===e.pinnedCount},on:{"pin-comment":e.onPinComment,"edit-comment":e.onEditComment,"delete-comment":e.onDeleteComment,"checklist-updated":e.saveComment}})})),1):r("div",{staticClass:"no-comment"},[r("em",[e._v("\n              "+e._s(e.$t("tasks.no_comment"))+"\n            ")])])],1)]):r("div",{staticClass:"has-text-centered"},[r("spinner")],1)]),r("div",{staticClass:"task-column preview-column"},[r("div",{staticClass:"preview-column-content"},[r("div",{staticClass:"flexrow preview-header"},[r("h2",{staticClass:"subtitle flexrow-item"},[e._v("\n            "+e._s(e.$t("tasks.preview"))+"\n          ")]),e.isPreviewButtonVisible?r("div",{staticClass:"set-main-preview flexrow-item flexrow pull-right"},[e.currentTaskPreviews&&e.currentTaskPreviews.length>0&&e.isCurrentUserManager?r("button",{class:{button:!0,"flexrow-item":!0,"is-loading":e.loading.setPreview},on:{click:e.setPreview}},[r("image-icon",{staticClass:"icon"}),r("span",{staticClass:"text"},[e._v("\n                "+e._s(e.$t("tasks.set_preview"))+"\n              ")])],1):e._e(),e.errors.setPreview?r("span",{staticClass:"error flexrow-item"},[e._v("\n              "+e._s(e.$t("tasks.set_preview_error"))+"\n            ")]):e._e()]):e._e(),e.currentTask&&e.currentTask.entity&&e.currentTask.entity.preview_file_id===e.currentPreviewId?r("div",{staticClass:"set-main-preview flexrow-item pull-right"},[r("em",[e._v(e._s(e.$t("tasks.set_preview_done")))])]):e._e()]),e.isPreviews?r("div",{staticClass:"preview-list mt2"},e._l(e.currentTaskPreviews,(function(t){return r("preview-row",{key:t.id,attrs:{preview:t,"preview-path":e.previewPath(t.id),taskId:e.currentTask?e.currentTask.id:"",selected:t.id===e.currentPreviewId}})})),1):r("div",[r("em",[e._v("\n            "+e._s(e.$t("tasks.no_preview"))+"\n          ")])]),r("div",{staticClass:"preview-picture"},[e.currentTaskPreviews&&e.currentTaskPreviews.length>0&&e.isMovie?r("div",[r("video-player",{ref:"preview-movie",attrs:{preview:e.currentPreview,"task-type-map":e.taskTypeMap,"entity-preview-files":e.taskEntityPreviews},on:{annotationchanged:e.onAnnotationChanged}})],1):e.isDlPreviewFile?r("a",{ref:"preview-file",staticClass:"button mt2",attrs:{href:e.currentPreviewDlPath}},[r("download-icon",{staticClass:"icon"}),r("span",{staticClass:"text"},[e._v("\n              "+e._s(e.$t("tasks.download_pdf_file",{extension:e.extension}))+"\n            ")])],1):e.currentTaskPreviews&&e.currentTaskPreviews.length>0&&"obj"===e.extension?r("model-viewer",{attrs:{"preview-url":e.currentPreviewPath,"preview-dl-path":e.currentPreviewDlPath}}):e.currentTaskPreviews&&e.currentTaskPreviews.length>0&&"png"===e.extension?r("picture-viewer",{ref:"preview-picture",attrs:{preview:e.currentPreview},on:{"annotation-changed":e.onAnnotationChanged,"add-preview":e.onAddExtraPreview,"remove-extra-preview":e.showRemoveExtraPreviewModal}}):e._e()],1)])])]),r("add-preview-modal",{ref:"add-preview-modal",attrs:{active:e.modals.addPreview,"is-loading":e.loading.addPreview,"is-error":e.errors.addPreview,"cancel-route":e.taskPath(),"form-data":e.addPreviewFormData},on:{fileselected:e.selectFile,confirm:e.closeAddPreviewModal}}),r("add-preview-modal",{ref:"add-extra-preview-modal",attrs:{active:e.modals.addExtraPreview,"is-loading":e.loading.addExtraPreview,"is-error":e.errors.addExtraPreview,"form-data":e.addExtraPreviewFormData,extensions:".png,.jpg,.jpeg"},on:{cancel:e.hideExtraPreviewModal,fileselected:e.selectFile,confirm:e.createExtraPreview}}),r("add-preview-modal",{ref:"change-preview-modal",attrs:{active:e.modals.changePreview,"is-loading":e.loading.changePreview,"is-error":e.errors.changePreview,"cancel-route":e.taskPath(),"form-data":e.changePreviewFormData,"is-editing":!0},on:{fileselected:e.selectFile,confirm:e.changePreview}}),r("edit-comment-modal",{attrs:{active:e.modals.editComment,"is-loading":e.loading.editComment,"is-error":e.errors.editComment,"comment-to-edit":e.commentToEdit,team:e.currentTeam},on:{confirm:e.confirmEditTaskComment,cancel:e.onCancelEditComment}}),r("delete-modal",{attrs:{active:e.modals.deleteComment,"is-loading":e.loading.deleteComment,"is-error":e.errors.deleteComment,text:e.$t("tasks.delete_comment"),"error-text":e.$t("tasks.delete_comment_error")},on:{confirm:e.confirmDeleteTaskComment,cancel:e.onCancelDeleteComment}}),r("delete-modal",{attrs:{active:e.modals.deleteExtraPreview,"is-loading":e.loading.deleteExtraPreview,"is-error":e.errors.deleteExtraPreview,text:e.$t("tasks.delete_preview"),"error-text":e.$t("tasks.delete_preview_error")},on:{cancel:e.hideRemoveExtraPreviewModal,confirm:e.confirmDeleteTaskPreview}})],1)])},n=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("6762"),r("2fdb"),r("28a5"),r("5d58")),a=r.n(s),o=r("67bb"),c=r.n(o);function d(e){return d="function"===typeof c.a&&"symbol"===typeof a.a?function(e){return typeof e}:function(e){return e&&"function"===typeof c.a&&e.constructor===c.a&&e!==c.a.prototype?"symbol":typeof e},d(e)}function u(e){return u="function"===typeof c.a&&"symbol"===d(a.a)?function(e){return d(e)}:function(e){return e&&"function"===typeof c.a&&e.constructor===c.a&&e!==c.a.prototype?"symbol":d(e)},u(e)}r("20d6"),r("7f7f"),r("7514");var l=r("bd86"),m=r("2f62"),v=r("0a35"),h=r("6be5"),f=r("ee35"),w=r("8bd9"),p=r("5f48"),k=r("5b23"),P=r("8078"),T=r("eb8c"),g=r("41e2"),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:{"preview-row":!0,"has-text-center":!0,selected:e.selected}},[r("button-link",{attrs:{text:e.label,path:e.previewPath}})],1)},y=[],C=r("e211"),_={name:"preview-row",components:{ButtonLink:C["a"]},props:{preview:{type:Object,default:function(){}},selected:{type:Boolean,default:!1},taskId:{type:String,default:""},previewPath:{type:Object,default:function(){}}},computed:{label:function(){var e="v".concat(this.preview.revision);return e}},methods:{}},x=_,E=(r("a3a9"),r("2877")),O=Object(E["a"])(x,b,y,!1,null,"f16eab4a",null),S=O.exports,I=r("be83"),D=r("d228"),$=r("274f"),j=r("fe13"),F=r("7d5f");function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(r,!0).forEach((function(t){Object(l["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L={name:"task",components:{AddComment:h["a"],AddPreviewModal:f["a"],Comment:w["a"],ChevronLeftIcon:v["e"],DeleteModal:p["a"],DownloadIcon:v["i"],EditCommentModal:k["a"],ImageIcon:v["o"],ModelViewer:P["a"],PeopleAvatar:T["a"],PreviewRow:S,PictureViewer:g["a"],Spinner:I["a"],SubscribeButton:D["a"],TaskTypeName:$["a"],ValidationTag:j["a"],VideoPlayer:F["a"]},data:function(){return{attachedFileName:"",currentPreviewId:null,currentExtraPreviewId:null,entityPage:this.getEntityPage(),selectedTab:"validation",taskLoading:{isLoading:!0,isError:!1},modals:{addPreview:!1,addExtraPreview:!1,deleteExtraPreview:!1,changePreview:!1,deleteTask:!1,deleteComment:!1,editComment:!1},loading:{addComment:!1,addPreview:!1,addExtraPreview:!1,changePreview:!1,setPreview:!1,deleteTask:!1,deleteComment:!1,editComment:!1},errors:{addComment:!1,addPreview:!1,addExtraPreview:!1,changePreview:!1,setPreview:!1,deleteTask:!1,deleteComment:!1,editComment:!1},currentTask:null,currentTaskComments:[],currentTaskPreviews:[],commentToEdit:null,otherPreviews:[],addPreviewFormData:null,addExtraPreviewFormData:null,changePreviewFormData:null,isSubscribed:!1,currentPreviewPath:"",currentPreviewDlPath:""}},created:function(){this.clearSelectedTasks(),this.loadTaskData()},mounted:function(){var e=this;this.handleModalsDisplay(),this.reset(),this.$nextTick((function(){e.$refs["task-columns"]&&(e.$refs["task-columns"].scrollTop=100,window.scrollTo(0,0))}))},computed:A({},Object(m["c"])(["currentEpisode","currentProduction","displayedShots","displayedAssets","getTaskComments","getTaskPreviews","getTaskComment","isCurrentUserManager","isSingleEpisode","isTVShow","personMap","productionMap","route","taskEntityPreviews","taskStatus","taskStatusForCurrentUser","taskMap","taskTypeMap","user"]),{isCommentingAllowed:function(){var e=this;return this.isCurrentUserManager||this.currentTask.assignees.find((function(t){return t===e.user.id}))},taskTypeBorder:function(){var e="transparent";return this.currentTask&&(e=this.currentTask.task_type_color),{"border-left":"4px solid ".concat(e)}},deleteTaskPath:function(){return this.taskPath(this.currentTask,"task-delete")},isPreviews:function(){return this.currentTaskPreviews&&this.currentTaskPreviews.length>0},taskEntityPath:function(){if(this.currentTask){var e=this.currentTask.entity_type_name,t="";t=this.currentTask.entity?this.currentTask.entity.id:this.currentTask.entity_id;var r={name:"Shot"===e?"shot":"asset",params:{production_id:this.currentTask.project_id}};return"Shot"===e?r.params.shot_id=t:r.params.asset_id=t,this.$route.params.episode_id&&(r.name="episode-".concat(r.name),r.params.episode_id=this.$route.params.episode_id),r}return{name:"open-productions"}},entityList:function(){var e=this,t=this.displayedShots.find((function(t){return t.id===e.currentTask.entity_id}));return t?this.displayedShots:this.displayedAssets},previousEntity:function(){var e=this;if(!this.currentTask)return{name:"open-productions"};var t=function(){var t=e.currentTask.task_type_id,r=e.entityList.findIndex((function(t){return t.id===e.currentTask.entity_id})),i=!1,n=r-1;n<0&&(n=e.entityList.length-1);var s=null;while(!s){if(e.entityList[n]){var a=e.entityList[n];s=a.tasks.find((function(r){var i=e.taskMap[r];return!!i&&i.task_type_id===t}))}else s=e.currentTask.id;if(!s&&(n--,n<0)){if(n=e.entityList.length,i)return{v:null};i=!0}}return{v:e.taskPath({id:s})}}();return"object"===u(t)?t.v:void 0},nextEntity:function(){var e=this;if(!this.currentTask)return{name:"open-productions"};var t=function(){var t=e.currentTask.task_type_id,r=!1,i=e.entityList.findIndex((function(t){return t.id===e.currentTask.entity_id})),n=i+1;n>=e.entityList.length&&(n=0);var s=null;while(!s){if(e.entityList[n]){var a=e.entityList[n];s=a.tasks.find((function(r){var i=e.taskMap[r];return!!i&&i.task_type_id===t}))}else s=e.currentTask.id;if(!s&&(n++,n>=e.entityList.length)){if(n=0,r)return{v:null};r=!0}}return{v:e.taskPath({id:s})}}();return"object"===u(t)?t.v:void 0},title:function(){if(this.currentTask){var e=this.currentTask.entity_type_name,t=this.currentTask.full_entity_name||this.currentTask.entity_name;return this.isTVShow&&"Shot"===e&&(t=t.split("/").splice(1).join("/")),"".concat(t)}return"Loading..."},windowTitle:function(){if(this.currentTask){var e=this.currentTask.task_type_name;return"".concat(this.title," / ").concat(e)}return"Loading..."},deleteText:function(){if(this.currentTask){var e=this.taskTypeMap[this.currentTask.task_type_id];return this.$t("main.delete_text",{name:"".concat(this.currentTask.entity_name," / ").concat(e.name)})}return""},isMovie:function(){if(this.currentTaskPreviews){var e=this.route.params.preview_id,t=this.currentTaskPreviews[0];return e&&(t=this.currentTaskPreviews.find((function(t){return t.id===e}))),t&&"mp4"===t.extension}return!1},extension:function(){if(this.currentTaskPreviews){var e=this.route.params.preview_id,t=this.currentTaskPreviews[0];return e&&(t=this.currentTaskPreviews.find((function(t){return t.id===e}))),t?t.extension:""}return""},moviePath:function(){var e=this.route.params.preview_id;return!e&&this.currentTaskPreviews&&(e=this.currentTaskPreviews[0].id),"/api/movies/originals/preview-files/".concat(e,".mp4")},isAssigned:function(){var e=this;return!!this.currentTask&&this.currentTask.assignees.some((function(t){return t===e.user.id}))},isPreviewButtonVisible:function(){return this.currentTask&&this.currentTask.entity&&this.currentTask.entity.preview_file_id!==this.currentPreviewId&&["png","mp4"].includes(this.extension)},isDlPreviewFile:function(){return this.currentTaskPreviews&&["pdf","ma","mb","rar","zip"].includes(this.extension)},currentTaskType:function(){return this.currentTask?this.taskTypeMap[this.currentTask.task_type_id]:null},currentPreview:function(){var e=this.currentTaskPreviews[0],t=this.route.params.preview_id;return t&&(e=this.currentTaskPreviews.find((function(e){return e.id===t}))),e},currentTeam:function(){var e=this;return this.currentProduction.team.map((function(t){return e.personMap[t]}))},pinnedCount:function(){return this.currentTaskComments.filter((function(e){return e.pinned})).length}}),methods:A({},Object(m["b"])(["addCommentPreview","addCommentExtraPreview","commentTask","commentTaskWithPreview","changeCommentPreview","clearSelectedTasks","deleteTask","deleteTaskPreview","deleteTaskComment","editTaskComment","loadEpisodes","loadTask","loadShots","loadAssets","loadPreviewFileFormData","loadTaskComments","loadTaskSubscribed","refreshPreview","pinComment","subscribeToTask","setCurrentEpisode","unsubscribeFromTask","updatePreviewAnnotation"]),{getEntityPage:function(){if(this.currentTask){var e={name:this.$route.params.type,params:{production_id:this.currentTask.project_id}};return"asset"===e.name?e.params.asset_id=this.currentTask.entity_id:e.params.shot_id=this.currentTask.entity_id,this.isTVShow&&(e.name="episode-".concat(e.name),e.params.episode_id=this.currentEpisode?this.currentEpisode.id:this.$route.params.episode_id),e}return{name:"open-productions"}},loadTaskData:function(){var e=this,t=this.getCurrentTask();t?(this.currentTask=t,this.loadTaskComments({taskId:this.route.params.task_id,entityId:t.entity_id,callback:function(t){t||(e.currentTaskComments=e.getCurrentTaskComments(),e.currentTaskPreviews=e.getCurrentTaskPreviews(),e.setOtherPreviews(),e.currentPreviewPath=e.getOriginalPath(),e.currentPreviewDlPath=e.getOriginalDlPath(),e.entityPage=e.getEntityPage(),e.setOtherPreviews(),e.loadTaskSubscribed({taskId:e.route.params.task_id,callback:function(t,r){t&&console.log(t),e.isSubscribed=r}}))}})):(this.taskLoading={isLoading:!0,isError:!1},this.loadTask({taskId:this.route.params.task_id,callback:function(t,r){t&&console.log(t);var i=e.loadAssets;"Shot"===r.entity_type_name&&(i=function(t){e.loadEpisodes((function(){e.isTVShow&&e.setCurrentEpisode(r.episode.id),e.loadShots(t)}))}),i((function(){e.currentTask=r,e.loadTaskComments({taskId:r.id,entityId:r.entity_id,callback:function(t){t?e.taskLoading={isLoading:!1,isError:!0}:(e.reset(),e.entityPage=e.getEntityPage(),e.taskLoading={isLoading:!1,isError:!1},e.loadTaskSubscribed({taskId:e.route.params.task_id,callback:function(t,r){t&&console.log(t),e.isSubscribed=r}}))}})}))}}))},isHighlighted:function(e){return e.preview&&e.preview.id===this.currentPreviewId},getCurrentTask:function(){return this.taskMap[this.route.params.task_id]},getCurrentComment:function(){if(this.route.params.comment_id)return this.getTaskComment(this.route.params.task_id,this.route.params.comment_id)},getCurrentTaskComments:function(){return this.getTaskComments(this.route.params.task_id)},getCurrentTaskPreviews:function(){return this.getTaskPreviews(this.route.params.task_id)},getCurrentTaskPath:function(){return this.currentTask?"/tasks/".concat(this.currentTask.id):""},getOriginalPath:function(){var e=this.route.params.preview_id;!e&&this.currentTaskPreviews&&this.currentTaskPreviews.length>0&&(e=this.currentTaskPreviews[0].id);var t=this.extension?this.extension:"png";return"/api/pictures/originals/preview-files/".concat(e,".").concat(t)},getOriginalDlPath:function(){var e=this.route.params.preview_id;return!e&&this.currentTaskPreviews&&this.currentTaskPreviews.length>0&&(e=this.currentTaskPreviews[0].id),"/api/pictures/originals/preview-files/".concat(e,"/download")},getPreviewPath:function(){var e=this.route.params.preview_id;return!e&&this.currentTaskPreviews&&this.currentTaskPreviews.length>0&&(e=this.currentTaskPreviews[0].id),"/api/pictures/previews/preview-files/".concat(e,".png")},addComment:function(e,t){var r=this,i=function(e,t){e?r.errors.addComment=!0:(r.$refs["add-preview-modal"].reset(),r.reset(),t&&"PreviewFile"===t.type&&r.resetPreview(t),r.attachedFileName=""),r.loading.addComment=!1},n={taskId:this.currentTask.id,taskStatusId:t,commentText:e,comment:e,callback:i};this.loading.addComment=!0,this.errors.addComment=!1,this.attachedFileName?this.commentTaskWithPreview(n):this.commentTask(n)},reset:function(){this.currentTaskComments=this.getCurrentTaskComments(),this.currentTaskPreviews=this.getCurrentTaskPreviews(),this.setOtherPreviews(),this.currentPreviewPath=this.getOriginalPath(),this.currentPreviewDlPath=this.getOriginalDlPath(),this.currentTask=this.getCurrentTask();var e=this.route.params.preview_id;!e&&this.currentTaskPreviews&&this.currentTaskPreviews.length>0&&(e=this.currentTaskPreviews[0].id),this.currentPreviewId=e},handleModalsDisplay:function(){var e=this.$store.state.route.path;this.modals={addPreview:!1,addExtraPreview:!1,deleteExtraPreview:!1,changePreview:!1,deleteTask:!1,deleteComment:!1,editComment:!1},e.indexOf("change-preview")>0?this.modals.changePreview=!0:e.indexOf("delete")>0&&e.indexOf("comments")<0&&(this.modals.deleteTask=!0)},selectFile:function(e){this.loadPreviewFileFormData(e),this.attachedFileName=e.get("file").name},createPreview:function(){var e=this;this.errors.addPreview=!1,this.loading.addPreview=!0,this.addCommentPreview({taskId:this.route.params.task_id,commentId:this.route.params.comment_id,callback:function(t,r){e.loading.addPreview=!1,t?e.errors.addPreview=!0:(e.$refs["add-preview-modal"].reset(),e.resetPreview(r))}})},createExtraPreview:function(){var e=this;this.errors.addExtraPreview=!1,this.loading.addExtraPreview=!0;var t=this.currentPreviewId,r=this.getCurrentTaskComments().find((function(e){return e.previews.findIndex((function(e){return e.id===t}))>=0}));this.addCommentExtraPreview({taskId:this.currentTask.id,previewId:this.currentPreview.id,commentId:r.id,callback:function(r,i){e.loading.addExtraPreview=!1,r?e.errors.addExtraPreview=!0:(e.$refs["add-extra-preview-modal"].reset(),e.currentPreview?e.resetPreview(e.currentPreview):e.resetPreview({id:t}),setTimeout((function(){e.$refs["preview-picture"].displayLast()}),0),e.modals.addExtraPreview=!1)}})},changePreview:function(){var e=this,t=this.currentTaskComments[0].preview;this.errors.changePreview=!1,this.loading.changePreview=!0,this.changeCommentPreview({preview:t,taskId:this.currentTask.id,comment:this.currentTaskComments[0],callback:function(r,i){e.loading.changePreview=!1,r?e.errors.changePreview=!0:(e.$refs["change-preview-modal"].reset(),e.resetPreview(t))}})},resetPreview:function(e){this.currentTaskComments=this.getCurrentTaskComments(),this.currentTaskPreviews=this.getCurrentTaskPreviews(),this.setOtherPreviews(),this.currentPreviewPath=this.getOriginalPath(),this.currentPreviewDlPath=this.getOriginalDlPath(),e&&this.$router.push(this.previewPath(e.id))},setPreview:function(){var e=this;this.loading.setPreview=!0,this.errors.setPreview=!1,this.$store.dispatch("setPreview",{taskId:this.currentTask.id,entityId:this.currentTask.entity.id,previewId:this.currentPreviewId,callback:function(t){t&&(e.errors.setPreview=!0),e.loading.setPreview=!1}})},setOtherPreviews:function(){var e=this;return this.currentTaskPreviews?this.otherPreviews=this.currentTaskPreviews.filter((function(t){return t.id!==e.currentPreviewId&&"mp4"===t.extension})):this.otherPreviews=[],this.otherPreviews},confirmDeleteTask:function(){var e=this;this.loading.deleteTask=!0,this.errors.deleteTask=!1,this.deleteTask({task:this.currentTask,callback:function(t){e.loading.deleteTask=!1,t?e.errors.deleteTask=!0:e.$router.push(e.entityPage)}})},confirmEditTaskComment:function(e){var t=this;this.loading.editComment=!0,this.errors.editComment=!1,this.editTaskComment({taskId:this.currentTask.id,comment:e,callback:function(e){t.loading.editComment=!1,e?t.errors.editComment=!0:t.modals.editComment=!1}})},saveComment:function(e,t){this.editTaskComment({taskId:this.currentTask.id,comment:e,checklist:t})},confirmDeleteTaskComment:function(){var e=this;this.loading.deleteComment=!0,this.errors.deleteComment=!1;var t=this.commentToEdit.id;this.deleteTaskComment({taskId:this.currentTask.id,commentId:t,callback:function(t){e.loading.deleteComment=!1,t?e.errors.deleteComment=!0:(e.reset(),e.currentTaskPreviews&&e.currentTaskPreviews.length>0&&e.resetPreview(e.currentTaskPreviews[0]),e.modals.deleteComment=!1)}})},confirmDeleteTaskPreview:function(){var e=this;this.loading.deleteExtraPreview=!0,this.errors.deleteExtraPreview=!1;var t=this.currentPreviewId,r=this.getCurrentTaskComments().find((function(e){return e.previews.findIndex((function(e){return e.id===t}))>=0}));this.$refs["preview-picture"].displayFirst(),this.deleteTaskPreview({taskId:this.currentTask.id,commentId:r.id,previewId:this.currentExtraPreviewId}).then((function(){e.loading.deleteExtraPreview=!1,e.resetPreview(e.currentPreview),e.hideRemoveExtraPreviewModal()})).catch((function(t){console.error(t),e.loading.deleteExtraPreview=!1,e.errors.deleteExtraPreview=!0}))},onPreviewAdded:function(e){var t=e.task_id,r=e.comment_id,i=e.preview_file_id,n=e.revision,s=e.extension,a=this.$store.getters.getTaskComment(t,r);!a||0!==a.previews.length&&a.previews[0].id===i||t!==this.currentTask.id||(this.$store.commit("ADD_PREVIEW_END",{preview:{id:i,revision:n,extension:s},taskId:t,commentId:r,comment:a}),this.currentPreviewId?this.resetPreview({id:this.currentPreviewId}):this.resetPreview({id:i}))},toggleSubscribe:function(){this.currentTask&&!this.isAssigned&&(this.isSubscribed?(this.unsubscribeFromTask(this.currentTask.id),this.isSubscribed=!1):(this.subscribeToTask(this.currentTask.id),this.isSubscribed=!0))},taskPath:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"task";e?(e.project_id=this.currentTask.project_id,e.episode_id=this.currentTask.episode_id):e=this.currentTask;var r={name:"open-productions"};return e&&(r={name:t,params:{production_id:e.project_id,task_id:e.id}},this.isTVShow&&this.currentEpisode&&(r.name="episode-".concat(t),r.params.episode_id=e.episode_id||this.currentEpisode.id)),r},previewPath:function(e){var t=this.taskPath(this.currentTask,"task-preview");return t.params&&(t.params.preview_id=e),t},onAnnotationChanged:function(e){var t=e.preview,r=e.annotations,i=this.currentTask.id;this.updatePreviewAnnotation({taskId:i,preview:t,annotations:r})},onAddExtraPreview:function(){this.modals.addExtraPreview=!0},hideExtraPreviewModal:function(){this.modals.addExtraPreview=!1},showRemoveExtraPreviewModal:function(e){this.currentExtraPreviewId=e.id,this.modals.deleteExtraPreview=!0},hideRemoveExtraPreviewModal:function(){this.modals.deleteExtraPreview=!1},onAddPreviewClicked:function(){this.modals.addPreview=!0},closeAddPreviewModal:function(){this.modals.addPreview=!1},onPinComment:function(e){this.pinComment(e)},onEditComment:function(e){this.commentToEdit=e,this.modals.editComment=!0},onDeleteComment:function(e){this.commentToEdit=e,this.modals.deleteComment=!0},onCancelEditComment:function(e){this.modals.editComment=!1},onCancelDeleteComment:function(e){this.modals.deleteComment=!1}}),watch:{currentPreviewId:function(){this.setOtherPreviews()},$route:function(){this.handleModalsDisplay(),this.$route.params.task_id!==this.currentTask.id&&this.loadTaskData();var e=this.route.params.preview_id;!e&&this.currentTaskPreviews&&this.currentTaskPreviews.length>0&&(e=this.currentTaskPreviews[0].id),this.currentPreviewId=e}},socket:{events:{"preview-file:add-file":function(e){this.onPreviewAdded(e)},"preview_file:update":function(e){var t=this,r=this.currentTaskPreviews.filter((function(t){return t.id===e.preview_file_id}));r&&this.refreshPreview({taskId:this.currentTask.id,previewId:e.preview_file_id}).then((function(){t.$refs["preview-movie"]?t.$refs["preview-movie"].isDrawing||t.$refs["preview-movie"].reloadAnnotations():t.$refs["preview-picture"]&&(t.$refs["preview-picture"].isDrawing||t.$refs["preview-picture"].reset())}))}}},metaInfo:function(){var e="Loading task... - Kitsu";if(this.currentTask){var t=this.taskTypeMap[this.currentTask.task_type_id].name;e="".concat(this.title," / ").concat(t," - Kitsu")}return{title:e}}},N=L,V=(r("ffbc"),Object(E["a"])(N,i,n,!1,null,"465459ae",null));t["default"]=V.exports},"9aa9":function(e,t){t.f=Object.getOwnPropertySymbols},a3a9:function(e,t,r){"use strict";var i=r("77f10"),n=r.n(i);n.a},bf0b:function(e,t,r){var i=r("355d"),n=r("aebd"),s=r("36c3"),a=r("1bc3"),o=r("07e3"),c=r("794b"),d=Object.getOwnPropertyDescriptor;t.f=r("8e60")?d:function(e,t){if(e=s(e),t=a(t,!0),c)try{return d(e,t)}catch(r){}if(o(e,t))return n(!i.f.call(e,t),e[t])}},c207:function(e,t){},ccb9:function(e,t,r){t.f=r("5168")},d8d6:function(e,t,r){r("1654"),r("6c1c"),e.exports=r("ccb9").f("iterator")},ebfd:function(e,t,r){var i=r("62a0")("meta"),n=r("f772"),s=r("07e3"),a=r("d9f6").f,o=0,c=Object.isExtensible||function(){return!0},d=!r("294c")((function(){return c(Object.preventExtensions({}))})),u=function(e){a(e,i,{value:{i:"O"+ ++o,w:{}}})},l=function(e,t){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!s(e,i)){if(!c(e))return"F";if(!t)return"E";u(e)}return e[i].i},m=function(e,t){if(!s(e,i)){if(!c(e))return!0;if(!t)return!1;u(e)}return e[i].w},v=function(e){return d&&h.NEED&&c(e)&&!s(e,i)&&u(e),e},h=e.exports={KEY:i,NEED:!1,fastKey:l,getWeak:m,onFreeze:v}},f921:function(e,t,r){r("014b"),r("c207"),r("69d3"),r("765d"),e.exports=r("584a").Symbol},ffbc:function(e,t,r){"use strict";var i=r("224c"),n=r.n(i);n.a}}]);
//# sourceMappingURL=chunk-6ee0a6d2.1de4468b.js.map