import{a as g}from"./chunk-CAQDKAQF.js";import{A as bt,B as St,C as Mt,D as _t,E as Pt,F as xt,G as Dt,H as Et,I as wt,J as It,K as A,P as H,a as I,c as F,d as R,e as x,f as k,g as N,h as T,i as G,j,k as B,m as L,n as V,o as lt,p as st,q as dt,r as ct,s as pt,t as ut,u as ft,v as ht,w as vt,x as yt,y as Ct,z as gt}from"./chunk-4TE6FYTN.js";import{a as E,b as w,q as mt,s as C}from"./chunk-4R3EZEY6.js";import{$a as z,Aa as et,Ea as p,Ga as Q,K as f,La as m,Ma as S,Na as it,O as Y,P as Z,Pa as h,Qa as rt,Ra as ot,Sc as y,Uc as at,Xc as P,Ya as U,Za as $,aa as l,ba as s,ia as tt,ja as c,mb as v,pa as D,sb as nt,ua as a,ub as M,va as o,vb as _,wa as u,xa as q,ya as O}from"./chunk-D5BCA4AJ.js";var jt=["class","dialog"],Ft=(()=>{let e=class e{constructor(r,t,n,d){this.dialogRef=r,this.data=t,this.priorityService=n,this.router=d}ngOnInit(){this.currentPriority=this.data}onNoClick(){this.dialogRef.close()}onDelete(){this.priorityService.deletePriority(this.currentPriority.id).subscribe({next:r=>{this.router.navigateByUrl("/priorities")},error:r=>{console.error(r)}})}};e.\u0275fac=function(t){return new(t||e)(s(Mt),s(_t),s(g),s(M))},e.\u0275cmp=f({type:e,selectors:[["app-delete-priority",8,"dialog"]],standalone:!0,features:[h],attrs:jt,decls:9,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","mat-dialog-close","","cdkFocusInitial","","color","warn",3,"click"]],template:function(t,n){t&1&&(a(0,"h1",0),m(1),o(),a(2,"div",1),m(3,` La prioridad se eliminar\xE1 y esta acci\xF3n es irreversible.
`),o(),a(4,"div",2)(5,"button",3),m(6,"Cancelar"),o(),a(7,"button",4),p("click",function(){return n.onDelete()}),m(8," Eliminar "),o()()),t&2&&(l(),it("Eliminar a ",n.currentPriority.name,""))},dependencies:[v,It,xt,Dt,wt,Et,C,y]});let i=e;return i})();function Bt(i,e){i&1&&(a(0,"th",16),m(1,"Nombres"),o())}function Lt(i,e){if(i&1&&(a(0,"td",17),m(1),o()),i&2){let b=e.$implicit;l(),S(b.name)}}function Vt(i,e){i&1&&u(0,"th",18)}var At=i=>["edit",i];function Ht(i,e){if(i&1){let b=et();a(0,"td",17)(1,"div",19)(2,"button",20)(3,"mat-icon"),m(4,"edit"),o()(),a(5,"button",21),p("click",function(){let n=Y(b).$implicit,d=Q();return Z(d.onDelete(n))}),a(6,"mat-icon"),m(7,"delete"),o()()()()}if(i&2){let b=e.$implicit;l(2),c("routerLink",ot(1,At,b.id))}}function qt(i,e){if(i&1&&(a(0,"tr",22)(1,"td",23),m(2," Sin prioridades para mostrar. "),a(3,"a",24),m(4,"Agregue"),o(),m(5," prioridades y vuelva aqu\xED. "),o()()),i&2){let b=Q();l(),tt("colspan",b.displayedColumns.length)}}function Ot(i,e){i&1&&u(0,"tr",25)}function Qt(i,e){i&1&&u(0,"tr",26)}var Ut=()=>[5,10,20],kt=(()=>{let e=class e{constructor(r,t){this.priorityService=r,this.dialog=t,this.priorities=[],this.displayedColumns=["name","actions"],this.title="Prioridades"}ngOnInit(){this.loadPriorities()}loadPriorities(){this.priorityService.getPriorities().subscribe({next:r=>{this.priorities=r,this.dataSource=new bt(this.priorities),this.paginator.length=this.priorities.length,this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort},error:r=>{console.error(r)}})}onDelete(r){this.dialog.open(Ft,{data:r}).afterClosed().subscribe(n=>{this.loadPriorities()})}};e.\u0275fac=function(t){return new(t||e)(s(g),s(Pt))},e.\u0275cmp=f({type:e,selectors:[["app-priorities-grid"]],viewQuery:function(t,n){if(t&1&&($(L,5),$(V,5)),t&2){let d;U(d=z())&&(n.paginator=d.first),U(d=z())&&(n.sort=d.first)}},standalone:!0,features:[h],decls:23,vars:7,consts:[[1,"container"],[1,"header"],[1,"actions"],["mat-raised-button","","routerLink","create"],[1,"data-table"],[1,"table-responsive"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["class","mat-row",4,"matNoDataRow"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions","disabled"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"table-actions"],["mat-mini-fab","","matTooltip","Editar",3,"routerLink"],["mat-mini-fab","","color","warn","matTooltip","Eliminar",3,"click"],[1,"mat-row"],[1,"mat-cell","empty-message"],["routerLink","/priorities/create"],["mat-header-row",""],["mat-row",""]],template:function(t,n){t&1&&(a(0,"div",0)(1,"div",1)(2,"h1"),m(3),o(),a(4,"div",2)(5,"button",3)(6,"mat-icon"),m(7,"add"),o(),m(8,"Nueva Prioridad "),o()()(),a(9,"div")(10,"div",4)(11,"div",5)(12,"table",6),q(13,7),D(14,Bt,2,0,"th",8)(15,Lt,2,1,"td",9),O(),q(16,10),D(17,Vt,1,0,"th",11)(18,Ht,8,3,"td",9),O(),D(19,qt,6,1,"tr",12)(20,Ot,1,0,"tr",13)(21,Qt,1,0,"tr",14),o()(),u(22,"mat-paginator",15),o()()()),t&2&&(l(3),S(n.title),l(9),c("dataSource",n.dataSource),l(8),c("matHeaderRowDef",n.displayedColumns),l(),c("matRowDefColumns",n.displayedColumns),l(),c("pageSizeOptions",rt(6,Ut))("disabled",n.displayedColumns.length<=0))},dependencies:[v,C,_,y,at,P,mt,St,st,ct,ht,pt,dt,vt,ut,ft,yt,Ct,gt,L,V,lt]});let i=e;return i})();var Nt=(()=>{let e=class e{constructor(r,t,n){this.formBuilder=r,this.priorityService=t,this.router=n,this.title="Crear Prioridad"}ngOnInit(){this.formPriority=this.formBuilder.group({name:["",[x.required]]})}get controlName(){return this.formPriority.get("name")}onClear(){this.controlName?.setValue("")}onSubmit(){if(this.formPriority.valid){let r=this.formPriority.value;this.priorityService.createPriority(r).subscribe({next:t=>{this.router.navigateByUrl("/prioritys")}})}}};e.\u0275fac=function(t){return new(t||e)(s(B),s(g),s(M))},e.\u0275cmp=f({type:e,selectors:[["app-create-priority"]],standalone:!0,features:[h],decls:23,vars:2,consts:[[1,"container"],[1,"header"],[1,"actions"],["mat-raised-button","","routerLink","/priorities"],[3,"formGroup","submit"],[1,"flex","flex-column","gap-3"],[1,"flex","align-items-center","gap-2"],[1,"w-100"],["matInput","","formControlName","name"],[1,"flex","justify-content-between"],["mat-raised-button","","color","warn","type","button",3,"click"],["mat-raised-button","","color","primary","type","submit"]],template:function(t,n){t&1&&(a(0,"div",0)(1,"div",1)(2,"h1"),m(3),o(),a(4,"div",2)(5,"button",3)(6,"mat-icon"),m(7,"arrow_back"),o(),m(8,"Volver a Bandeja "),o()()(),a(9,"form",4),p("submit",function(){return n.onSubmit()}),a(10,"div",5)(11,"mat-card")(12,"mat-card-content")(13,"div",6)(14,"mat-form-field",7)(15,"mat-label"),m(16,"Nombre"),o(),u(17,"input",8),o()()()(),a(18,"div",9)(19,"button",10),p("click",function(){return n.onClear()}),m(20," Limpiar "),o(),a(21,"button",11),m(22," Registrar "),o()()()()()),t&2&&(l(3),S(n.title),l(6),c("formGroup",n.formPriority))},dependencies:[v,C,_,y,P,E,w,H,T,R,k,N,F,I,G,j,A]});let i=e;return i})();var Tt=(()=>{let e=class e{constructor(r,t,n,d){this.route=r,this.formBuilder=t,this.priorityService=n,this.router=d,this.title="Editar Prioridad"}ngOnInit(){this.formPriority=this.formBuilder.group({id:["",[x.required]],name:["",[x.required]]});let r=this.route.snapshot.paramMap.get("id")??"";this.priorityService.getPriorityById(Number(r)).subscribe({next:t=>{this.currentPriority=t,this.controlId?.setValue(this.currentPriority.id),this.controlName?.setValue(this.currentPriority.name)},error:t=>{console.error(t)}})}get controlId(){return this.formPriority.get("id")}get controlName(){return this.formPriority.get("name")}onClear(){this.controlName?.setValue(this.currentPriority.name)}onSubmit(){if(this.formPriority.valid){let r=this.formPriority.value;this.priorityService.updatePriority(r.id,r).subscribe({next:t=>{this.router.navigateByUrl("/priorities")},error:t=>{console.error(t)}})}}};e.\u0275fac=function(t){return new(t||e)(s(nt),s(B),s(g),s(M))},e.\u0275cmp=f({type:e,selectors:[["app-edit-priority"]],standalone:!0,features:[h],decls:23,vars:2,consts:[[1,"container"],[1,"header"],[1,"actions"],["mat-raised-button","","routerLink","/priorities"],[3,"formGroup","submit"],[1,"flex","flex-column","gap-3"],[1,"flex","align-items-center","gap-2"],[1,"w-100"],["matInput","","formControlName","name"],[1,"flex","justify-content-between"],["mat-raised-button","","color","warn","type","button",3,"click"],["mat-raised-button","","color","primary","type","submit"]],template:function(t,n){t&1&&(a(0,"div",0)(1,"div",1)(2,"h1"),m(3),o(),a(4,"div",2)(5,"button",3)(6,"mat-icon"),m(7,"arrow_back"),o(),m(8,"Volver a Bandeja "),o()()(),a(9,"form",4),p("submit",function(){return n.onSubmit()}),a(10,"div",5)(11,"mat-card")(12,"mat-card-content")(13,"div",6)(14,"mat-form-field",7)(15,"mat-label"),m(16,"Nombre"),o(),u(17,"input",8),o()()()(),a(18,"div",9)(19,"button",10),p("click",function(){return n.onClear()}),m(20," Limpiar "),o(),a(21,"button",11),m(22,"Editar"),o()()()()()),t&2&&(l(3),S(n.title),l(6),c("formGroup",n.formPriority))},dependencies:[v,C,_,y,P,E,w,H,T,R,k,N,F,I,G,j,A]});let i=e;return i})();var xe=[{path:"",component:kt},{path:"create",component:Nt},{path:"edit/:id",component:Tt}];export{xe as routes};