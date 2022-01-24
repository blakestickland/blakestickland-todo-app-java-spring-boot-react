import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

const TodoComponent = () => {
    const { id } = useParams();
    const [todo, setTodo] = useState({
        id,
        description : "",
        targetDate : moment(new Date()).format("YYYY-MM-DD")
    })
    const navigate = useNavigate();
    let description = todo.description;
    let targetDate = todo.targetDate;

    useEffect(() => {
        if (id === -1) return;
        let username = AuthenticationService.getLoggedInUsername();
        TodoDataService.retrieveTodo(username, id)
            .then((response) =>
                setTodo({
                    ...todo,
                    description: response.data.description || todo.description,
                    targetDate: moment(response.data.targetDate).format("YYYY-MM-DD") || todo.targetDate,
                })
            );
    }, [id, todo]);
    

    const onSubmit = (values) => {
        let username = AuthenticationService.getLoggedInUsername();
        
        let todo = {
            id,
            description: values.description,
            targetDate: values.targetDate,
        };
        if (id === -1) {
            TodoDataService.createTodo(username, todo)
            .then(
                () => {
                    navigate(`/todos`);
                }
            );
        } else {
            TodoDataService.updateTodo(username, id, todo)
            .then(
                () => {
                    navigate(`/todos`);
                }
            );
        }
    }

    const validate = (values) => {
        let errors = {}
        if (!values.description) {
            errors.description = "Enter a desciption";
        } else if (values.description.length < 5) {
            errors.description = "Enter at least 5 characters in description";
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter a valid target date";
        }

        return errors;
    }

    return(
        <div>
            <h1>Todo</h1>
            <div className="container">
                <Formik
                    initialValues={{ description, targetDate }}
                    onSubmit={onSubmit}
                    validateOnBlur={false}
                    validateOnChange={false}
                    validate={validate}
                    enableReinitialize={true}
                >
                    {
                        (todo) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default TodoComponent;