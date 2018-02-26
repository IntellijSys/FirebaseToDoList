import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Subscription } from 'rxjs/Subscription';

import { TaskItem } from '../../models/task-item/task-item.interface';

@Component({
  selector: 'page-edit-to-do-item',
  templateUrl: 'edit-to-do-item.html',
})
export class EditToDoItemPage {

  taskItemSubscription : Subscription;
  taskItemRef$: FirebaseObjectObservable<TaskItem>;
  taskItem = {} as TaskItem;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
  	const taskItemId = this.navParams.get('taskItemId');

    console.log('task-list/${taskItemId}');

  	this.taskItemRef$ = this.database.object(`task-list/${taskItemId}`);
    console.log(this.taskItemRef$);
    this.taskItemSubscription = this.taskItemRef$.subscribe(
      taskItem => this.taskItem = taskItem
    );
  }

  editTaskItem(taskItem: TaskItem){
    this.taskItemRef$.update(taskItem);

    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditToDoItemPage');
  }

  ionViewWillLeave(){
    this.taskItemSubscription.unsubscribe();
  }


}
