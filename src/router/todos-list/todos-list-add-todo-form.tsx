import React, { useCallback, useState } from "react";
import { Form } from "react-final-form";
import { Collapse } from "react-collapse";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";

import * as Styled from "./todos-list-add-todo-form.styles";
import { FinalFormInput } from "components";
import { todoContentValidator, createTodo, scrollToBottom } from "common-utils";
import { useUser } from "hooks";
import { ITodoList, IAnyRequestStatus } from "store";
import { FormApi } from "final-form";

// Name et Id du champ d'ajout de todo
const todosListAddTodoLabel = "todosListAddTodoLabel";

interface ITodosListAddTodoForm {
  todosListAddTodoLabel: string;
}

interface ITodosListAddTodoFormProps {
  todosList?: ITodoList;
  getRequestStatus: IAnyRequestStatus;
}

const todosListAddTodoFormInitialValues: ITodosListAddTodoForm = {
  todosListAddTodoLabel: "",
};

export const TodosListAddTodoForm = ({
  todosList,
  getRequestStatus,
}: ITodosListAddTodoFormProps) => {
  const [isFormDisplayed, toggleFormDisplay] = useState(false);

  const { addTodo } = useUser();

  /** Ajoute le todo à la todosList et vide le champ du formulaire*/
  const handleAddTodo = useCallback(
    (formValues: ITodosListAddTodoForm, form: FormApi<ITodosListAddTodoForm>) => {
      const newTodo = createTodo(formValues.todosListAddTodoLabel);

      // On retourne null dans le render, donc todosList.id est forcément défini lorsqu'on appelle cette fonction
      addTodo({ todo: newTodo, todosListId: todosList?.id as ITodoList["id"] });
      // On reset le champ après l'ajout
      form.change(todosListAddTodoLabel, todosListAddTodoFormInitialValues.todosListAddTodoLabel);

      // Petit hack pour être bien sur que le todo a bien été ajouté. Sinon, ne scroll pas jusqu'en bas
      setTimeout(() => {
        scrollToBottom();
      }, 50);
    },
    [addTodo, todosList]
  );

  /** Affiche ou cache le formulaire et reset l'état du champ du todo
   * pour ne pas qu'il soit encore en erreur à la ré-ouverture s'il lors de la fermeture il est en erreur */
  const handleToggleForm = useCallback(
    (formApi: FormApi<ITodosListAddTodoForm>) => {
      toggleFormDisplay(!isFormDisplayed);
      formApi.resetFieldState(todosListAddTodoLabel);
    },
    [isFormDisplayed]
  );

  // On cache le formulaire s'il n'y a pas de todoList. On ne veut pas de skeletonLoader ici.
  if (!todosList || getRequestStatus === "PENDING") return null;

  return (
    <>
      <Styled.FixedContentPusher />
      <Form
        onSubmit={handleAddTodo}
        initialValues={todosListAddTodoFormInitialValues}
        render={({ handleSubmit, form }) => {
          return (
            <Styled.Wrapper>
              <Styled.ToggleFormButton
                role="button"
                onClick={() => handleToggleForm(form)}
                isFormDisplayed={isFormDisplayed}
              >
                <span>Ajouter une tâche</span>
                <ExpandLessOutlinedIcon />
              </Styled.ToggleFormButton>

              <Collapse isOpened={isFormDisplayed}>
                <Styled.Form onSubmit={handleSubmit}>
                  <FinalFormInput
                    label="Nouvelle tâche"
                    name={todosListAddTodoLabel}
                    id={todosListAddTodoLabel}
                    validate={todoContentValidator}
                    fullWidth
                  />
                </Styled.Form>
              </Collapse>
            </Styled.Wrapper>
          );
        }}
      />
    </>
  );
};