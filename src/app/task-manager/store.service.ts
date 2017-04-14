import { Client } from './task-manager-clients/Client';
import { User } from './task-manager-users/user.model';
import { Project } from './task-manager-projects/project.model';
import { Brief } from './task-manager-briefs/brief.model';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

const baseUrl = 'http://localhost:27017/';
@Injectable()
export class Store {

  private dataStore: any;
  private _briefs: BehaviorSubject<Brief[]>;
  private _users: BehaviorSubject<User[]>;
  private _projects: BehaviorSubject<Project[]>;
  private _clients: BehaviorSubject<Client[]>;

  constructor(private http: Http) {
    this.dataStore = { briefs: [], clients: [], users: [], projects: [] };
    this._briefs = <BehaviorSubject<Brief[]>>new BehaviorSubject([]);
    this._projects = <BehaviorSubject<Project[]>>new BehaviorSubject([]);
    this._users = <BehaviorSubject<User[]>>new BehaviorSubject([]);
    this._clients = <BehaviorSubject<Client[]>>new BehaviorSubject([]);
  }

  get briefsCollection() {
    return this.dataStore.briefs.filter(a => a._id);
  }

  get clientsCollection() {
    return this.dataStore.clients.filter(a => a._id);
  }

  get usersCollection() {
    return this.dataStore.users.filter(a => a._id);
  }

  get projectsCollection() {
    return this.dataStore.projects.filter(a => a._id);
  }

  get briefs() { return this._briefs.asObservable(); }
  get projects() { return this._projects.asObservable(); }
  get clients() { return this._clients.asObservable(); }
  get users() { return this._users.asObservable(); }

  getAllBriefs() { this.getCollection('briefs', this._briefs); }
  getUsers() { this.getCollection('users', this._users); }
  getProjects() { this.getCollection('projects', this._projects); }
  getClients() { this.getCollection('clients', this._clients); }

  addNewBrief(brief: Brief) {
    if (!brief) return;
    brief.index = this.briefsCollection.length;
    /*let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.baseUrl}briefs`, JSON.stringify(brief), options)
      .map(response => response.json() || []).subscribe(data => {
        this.dataStore.briefs.push(data);
        this._briefs.next(Object.assign({}, this.dataStore).briefs);
      }, error => console.log('Could not create brief.'));*/

    this.addNewItem(brief, 'briefs', this._briefs);
  }

  addNewUser(user: User) {
    if (!user) return;
    user.userId = this.usersCollection.length;
    this.addNewItem(user, 'users', this._users);
  }

  addNewProject(project: Project) {
    if (!project) return;
    project.projectId = this.projectsCollection.length;
    this.addNewItem(project, 'projects', this._projects);
  }

  addNewClient(client: Client) {
    if (!client) return;
    client.clientId = this.clientsCollection.length;
    this.addNewItem(client, 'clients', this._clients);
  }

  removeClient(client: Client) {
    if (!client) return;
    
    this.http.delete(`${baseUrl}clients`, JSON.stringify(client))
      .map(response => response.json() || []).subscribe(data => {
        this.dataStore.clients.forEach((t, i) => {
          if (t._id == data._id) {
            this.dataStore.clients[i] = data;
          }
        });

        this._clients.next(Object.assign({}, this.dataStore).clients);
      }, error => console.log('Could not delete client.'));
  }
  

  updateBrief(brief: Brief) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.put(`${baseUrl}briefs`, JSON.stringify(brief), options)
      .map(response => response.json() || []).subscribe(data => {
        this.dataStore.briefs.forEach((t, i) => {
          if (t._id == data._id) {
            this.dataStore.briefs[i] = data;
          }
        });

        this._briefs.next(Object.assign({}, this.dataStore).briefs);
      }, error => console.log('Could not update brief.'));
  }

  private addNewItem(item: any, query: string, serviceType: BehaviorSubject<any>) {
    console.log("add new item " + query);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${baseUrl}${query}`, JSON.stringify(item), options)
      .map(response => response.json() || []).subscribe(data => {
        this.dataStore[query].push(data);
        serviceType.next(Object.assign({}, this.dataStore)[query]);
      }, error => console.log('Could not create item.'));
  }

  private getCollection(query: string, serviceType: BehaviorSubject<any>) {
    this.http.get(`${baseUrl}${query}`).map(response => response.json()).subscribe(data => {
      this.dataStore[query] = data ? data : [];
      serviceType.next(Object.assign({}, this.dataStore)[query]);
    }, error => console.log('Could not load items.'));
  }


  /*remove(briefId: number) {
    this.http.delete(`${this.baseUrl}tasks/${briefId}`).subscribe(response => {
      this.dataStore.briefs.forEach((t, i) => {
        if (t.id === briefId) { this.dataStore.briefs.splice(i, 1); }
      });
 
      this._briefs.next(Object.assign({}, this.dataStore).briefs);
    }, error => console.log('Could not delete brief.'));
  }*/
}