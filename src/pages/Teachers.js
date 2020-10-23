import React from 'react';
// components
import Showcase from '../components/global/Showcase';
import PageTitle from '../components/global/PageTitle';
import Teacher from '../components/teachers/Teacher';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TeachersList from '../components/teachers/TeachersList';

const Teachers = (props) => {

    const teachers = [
        { id: 1, fullname: "Muhammad Toshtemirov", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis animi obcaecati nostrum nam eos explicabo! Ullam nihil aspernatur hic unde." },
        { id: 2, fullname: "Bahrom Nazarov", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis animi obcaecati nostrum nam eos explicabo! Ullam nihil aspernatur hic unde." },
        { id: 3, fullname: "Sardor Rahimov", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis animi obcaecati nostrum nam eos explicabo! Ullam nihil aspernatur hic unde." },
        { id: 4, fullname: "Shohjahon Ibrohimov", text: "amet consectetur adipisicing elit. Enim in quod rerum, suscipit, doloremque aliquid dolorem provident inventore autem harum reiciendis possimus error libero " },
        { id: 5, fullname: "Qodir Po'latov", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis animi obcaecati nostrum nam eos explicabo! Ullam nihil aspernatur hic unde." },
        { id: 6, fullname: "Akmal Boburov", text: "unde nam expedita omnis nulla ipsam quod eius reprehenderit maxime a laborum? Laborum deleniti sed nesciunt impedit quod ab praesentium voluptatem perferendis fugiat " },
    ]

    return (
        <Router>
            <div>
                <div className="container">
                    <Showcase bgName="teachers" title="O'QITUVCHLAR" text="O'qituvchi haqida ma'lumotlar" />
                    <PageTitle title="Saytimizdagi faol o'qituvchilar va ular ishlab shiqqan testlar bilan batafsil tanishishingiz mumkin" />
                </div>
                <Switch>
                    <Route
                        exact
                        path="/teachers"
                        component={() => <TeachersList teachers={teachers} />}
                    />

                    <Route exact path='/teachers/:id' render={(routerProps) => Teacher(teachers, routerProps)} />

                </Switch>
            </div>
        </Router >
    )
}

export default Teachers
