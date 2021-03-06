import React, { useCallback, useState, memo } from "react";
import { Form } from "react-final-form";
import { Collapse } from "react-collapse";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import { ClickAwayListener } from "@material-ui/core";
import { FormApi } from "final-form";

import { FinalFormInput } from "components";
import { todoContentValidator, scrollToBottom } from "common-utils";
import { useTodosLists, useAuth } from "hooks";
import { ITodosList } from "store";
import * as Styled from "./todos-list-add-todo-form.styles";
import { IPostTodoInput } from "services";

// Name et Id du champ d'ajout de todo
const todosListAddTodoLabel = "todosListAddTodoLabel";

interface ITodosListAddTodoForm {
  [todosListAddTodoLabel]: string;
}

interface ITodosListAddTodoFormProps {
  todosList?: ITodosList;
}

const todosListAddTodoFormInitialValues: ITodosListAddTodoForm = {
  todosListAddTodoLabel: "",
};

export const TodosListAddTodoForm = memo(({ todosList }: ITodosListAddTodoFormProps) => {
  const [isFormDisplayed, toggleFormDisplay] = useState(false);
  const { addTodo } = useTodosLists();
  const { token } = useAuth();

  /** Ajoute le todo à la todosList et vide le champ du formulaire*/
  const handleAddTodo = useCallback(
    async (values: ITodosListAddTodoForm, form: FormApi<ITodosListAddTodoForm>) => {
      const data: IPostTodoInput["data"] = { label: values.todosListAddTodoLabel };

      const payload: IPostTodoInput = {
        data,
        token,
        todosListId: todosList?.id as ITodosList["id"],
      };

      // On reset le champ après l'ajout
      form.change(todosListAddTodoLabel, todosListAddTodoFormInitialValues.todosListAddTodoLabel);
      addTodo(payload);
      // Petit hack pour être bien sur que le todo a bien été ajouté. Sinon, ne scroll pas jusqu'en bas
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    },
    [addTodo, todosList, token]
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

  if (!todosList) return null;

  return (
    <>
      <Styled.FixedContentPusher />
      <ClickAwayListener onClickAway={() => toggleFormDisplay(false)}>
        {/* ClickAwayListerner n'utilise pas forwardRef en interne, donc obligé d'avoir un div pour le faire fonctionner */}
        <div>
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
        </div>
      </ClickAwayListener>
    </>
  );
});
