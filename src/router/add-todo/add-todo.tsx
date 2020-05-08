import React, { useCallback, KeyboardEvent, useState } from "react";
import { Form } from "react-final-form";
import { FormApi } from "final-form";
import AddIcon from "@material-ui/icons/Add";
import { RouteComponentProps } from "react-router-dom";

import * as Styled from "./add-todo.styles";
import { FinalFormInput, Footer } from "components";
import { todoTitleValidator, checkIsEmpty, createTodosList, createTodo } from "common-utils";
import { AddTodoTasksRenderer } from "./add-todo-tasks-renderer";
import { useUser } from "hooks";
import { ITodo } from "store";

interface IAddTodoForm {
  addTodoTitle: string;
  addTodoLabel: string;
}

type IAddTodoProps = RouteComponentProps;

const addTodoLabelNameAndId = "addTodoLabel";

const addTodoInitialValues: IAddTodoForm = {
  addTodoTitle: "",
  [addTodoLabelNameAndId]: "",
};

export const AddTodo = ({ history }: IAddTodoProps) => {
  const user = useUser();
  const [tasks, updateTasks] = useState<ITodo[]>([]);

  const onSubmit = useCallback(
    (form: IAddTodoForm) => {
      const todoList = createTodosList(form.addTodoTitle, tasks);

      // TODO: Dispatch une action qui ajoute la todosList en bdd
      // TODO: Déplacer la redirection dans le thunk qui fait l'ajout en bdd
      user.addNewTodosList(todoList);
      history.push("/");
    },
    [tasks, user, history]
  );

  const handleAddNewTask = useCallback(
    (evt: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>, form: FormApi<IAddTodoForm>) => {
      if (evt.key === "Enter") {
        evt.preventDefault();
        const newTodoLabelMeta = form.getFieldState(addTodoLabelNameAndId);
        console.log(form.getFieldState("addTodoLabel"));
        // On peut caster en string car le champ que l'on séléctionne existe forcément
        const newTodoLabel = newTodoLabelMeta?.value as string;

        // On vérifie car l'api form peut retourner undefined si le champ n'existe pas
        if (!checkIsEmpty(newTodoLabel)) {
          const newTodo = createTodo(newTodoLabel);
          updateTasks([...tasks, newTodo]);
          form.change(addTodoLabelNameAndId, "");
        }
      }
    },
    [tasks]
  );

  const handleRemoveTask = useCallback(
    (taskId: string) => {
      const filteredTasks = tasks.filter((task) => task.id !== taskId);

      updateTasks(filteredTasks);
    },
    [tasks]
  );

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Title>Nouvelle liste</Styled.Title>
        <Styled.CancelLink to="/">Annuler</Styled.CancelLink>
      </Styled.Header>

      <Styled.Form>
        <Form
          onSubmit={onSubmit}
          initialValues={addTodoInitialValues}
          render={({ handleSubmit, form }) => {
            return (
              <>
                <Styled.InputWrapper>
                  <FinalFormInput
                    label="Titre de la liste"
                    name="addTodoTitle"
                    id="addTodoTitle"
                    validate={todoTitleValidator}
                    fullWidth
                  />
                </Styled.InputWrapper>
                <Styled.InputWrapper>
                  <FinalFormInput
                    label="Nouvelle tâche"
                    name={addTodoLabelNameAndId}
                    id={addTodoLabelNameAndId}
                    onKeyUp={(evt) => handleAddNewTask(evt, form)}
                    fullWidth
                  />
                </Styled.InputWrapper>

                <AddTodoTasksRenderer tasks={tasks} onRemoveTask={handleRemoveTask} />
                <Styled.Placeholder />
                <Footer
                  onIconClick={handleSubmit}
                  iconComponent={<AddIcon />}
                  isDisabled={tasks.length === 0}
                >
                  <Styled.FooterContent>Créér la nouvelle liste</Styled.FooterContent>
                </Footer>
              </>
            );
          }}
        />
      </Styled.Form>
    </Styled.Wrapper>
  );
};
