# AngularTourOfHeroes 

Más información en https://github.com/Iron-mind/angular-WebPage
## Fundamentos

```bash
npm i -g '@angular/cli
```

### Iniciamos la app
```bash
ng new my-store
```

### lo ponemos a correr
```bash
ng serve
```
Pa que abra el navegador
```bash
ng serve -o 
```
Pa cambiar el puerto
```bash
ng serve -o --port=3500
```
crear componentes (un componente pertenece a un solo modulo)
```bash
npx ng g c components/img
```

### agregamos el archivo .nvmrc
```
v14.17.6
```


# String {interpolation}
doble llave para ejecutar js
```html
<h1>{{'Hola mundo'}}</h1>
```
## property [binding]
```ts
//usado para configuración de propiedades html
export class AppComponent {
  title = 'my-store';
  name= 'juan David';
  age=21;
  imgLink='https://soruce.unplash.com/random/200x200';
  input='hola';
}
```
```html
//bindeando propiedades de un componente a una variable
<input type="text"[value]="input" />
```
## Event (binding)

```ts
me={
    name:'juan david',
    age:21,
    skills:89,
    multiSkills:''

  }

  toggleButton(){
    this.me.skills=this.me.skills+1;
  }
  onScroll(e:Event){
     const element = e.target as HTMLElement;
      console.log(element.scrollTop);
  }
  changeMultiSkills(e:Event){
    const element = e.target as HTMLInputElement;
    this.me.multiSkills=element.value;
  }
```

```html
<button (click)="toggleButton()">+</button>


<div (scroll)="onScroll($event)" class="box">
  <p>In et nulla nisi. Maecenas tortor justo, vulputate ut porta sit amet, suscipit nec orci. Nullam ac blandit purus. Aliquam tincidunt nunc non eleifend congue.</p>
</div>

<input (keyup)="changeMultiSkills($event)" type="text" [value]="me.multiSkills" />

```
# ngModel para forms
```ts
import { FormsModule } from '@angular/forms';
//...
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //<-------
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
# Estructuras de control
```html
//como el renderizado condicional
<div *ngIf="me.age > 18; else noCumple">
  <p>Soy mayor de edad</p>
</div>
<ng-template #noCumple>
  <p>No cumple</p>
</ng-template>

//ngFor
<h1>añadir nombres</h1>
<p>{{namesString}}</p>
<input type=" text" (keyup.enter)="addName($event)" name="names" [(ngModel)]="name">
<button (click)="addName($event)">+</button>
<ul>
  <li *ngIf="names.length == 0">
    <p>No hay nombres</p>
  </li>
  <li *ngFor="let name of names; index as i">
    {{name}}  {{i}}
    <button (click)="deleteName(i)">-</button>
  </li>
</ul>


//ngSuitch
<h1 >*ngSwitch</h1>
<div [ngSwitch]="product.name">
  <div *ngSwitchCase="'Juan'">
    <p>Juan</p>
  </div>
  <div *ngSwitchCase="'Pedro'">
    <p>Pedro</p>
  </div>
  <div *ngSwitchDefault>
    <p>no match</p>
  </div>
</div>
```

## style and class
```html
<h2>class and style</h2>
   <input type="number" #reqInput="ngModel"  required="true" [(ngModel)]="widthImg" >
   <input type="number" #reqInput="ngModel"  required="true" [(ngModel)]="heightImg" >
   <p class="message-error"  [class.visible]="reqInput.invalid">este campo es requerido</p>
   <div [style.font-style]="reqInput.invalid?'normal':'italic'" >Cambio de estilos en tiempo real</div>
                       <!-- tambien se puede usar style.width.% -->
    <img [src]="user.avatar" [style.width.px]="widthImg" [style.height.px]="heightImg" [style.border]="'1px solid black'">
  

  <h2>ngClass {{title}}</h2>
    <!--input con ngClass angular-->
    <input type="text"  required #nameInput4="ngModel" [(ngModel)]="title">
    <p [ngClass]="{
      'text-success': nameInput4.valid,
      'text-danger': nameInput4.invalid
    }">
      proceso {{nameInput4.valid}} </p>

    <h2>ng-style</h2>
    Mueve los inputs de tamaño
    <input type="color" [(ngModel)]="colorImg">
    <div [ngStyle]="{
      'width.px': widthImg,
      'height.px': heightImg,
      'background-color': colorImg
    }"></div>

 
```
```scss
.message-error{
  color: red;
  font-size: 1.2em;
  opacity: 0;
  &.visible{
    opacity: 0.8;
  }
}
```

## @Input para pasar atributos del padre al hijo
```ts
export class ImgComponent implements OnInit {
 
  @Input() src: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
```
```html
img.component.html
<img [src]="src" *ngIf="src;else defImage">

app.component.html
<input type="text" [(ngModel)]="imgParent">
<app-img [src]="imgParent"></app-img>
```

## Ahora pasar de hijo al padre

```ts
 ...
 @Output() imgLoaded = new EventEmitter();
  
  imgError() {
    // lo podemos emitir con informacion en en los parametrso del emit
    this.imgLoaded.emit('img hijo no carga') //lo emitimos pa que lo escuche el padre
    this.src =url
  }
  ```
