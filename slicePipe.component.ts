import {Component} from 'angular2/core';

@Component({
  selector: 'slice-pipe',
  template: `
	    <h2>Slice Pipe Example</h2>
	    <p>{{str}} (0:4): {{str | slice:0:4}}</p>
	    <h4>names (1:4)</h4>
	    <ul>
	    	<li *ngFor="let name of names | slice:1:4">{{name}}</li>
	    </ul>
		 <ul>
	    	<li *ngFor="let users of user | slice:1:4">{{name}}</li>
	    </ul>
	    `
})

export class SlicePipeComponent {
	str: string = "acadgild";
	names: string[] = ['amit', 'Acadgild', 'romil', 'sikka', 'archana']
	
	user = [
{name: “abc”, type:”private”},
{name: “xyz”, type:”public”},
{name: “test”, type:”private”},
{name: “Adom”, type:”private”},
{name: “Mahesh”, type:”public”},
{name: “Piyush”, type:”public”}
]

}