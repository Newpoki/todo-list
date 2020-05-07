import React, { useCallback, KeyboardEvent, useState } from "react";
import { Form } from "react-final-form";
import { FormApi } from "final-form";
import AddIcon from "@material-ui/icons/Add";

import * as Styled from "./add-todo.styles";
import { FinalFormInput, Footer, ITodoTemp } from "components";
import { todoTitleValidator, checkIsEmpty } from "common-utils";
import { AddTodoTasksRenderer } from "./add-todo-tasks-renderer";

interface IAddTodoForm {
  addTodoTitle: string;
  addTodoTask: string;
}

const addTodoInitialValues: IAddTodoForm = {
  addTodoTitle: "",
  addTodoTask: "",
};

const addTodoTaskNameAndId = "addTodoTask";

export const AddTodo = () => {
  const [tasks, updateTasks] = useState<ITodoTemp[]>([]);

  const onSubmit = useCallback(() => {
    // TODO: Doit ajouter en bdd et dans le reducer approprié la nouvelle tâche, puis rediriger vers la page de la nouvelle tâche
    console.log("submit");
  }, []);

  const handleAddNewTask = useCallback(
    (evt: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>, form: FormApi<IAddTodoForm>) => {
      if (evt.key === "Enter") {
        evt.preventDefault();
        const newTaskMeta = form.getFieldState(addTodoTaskNameAndId);
        // On peut caster en string car le champ que l'on séléctionne existe forcément
        const newTaskLabel = newTaskMeta?.value as string;

        // On vérifie car l'api form peut retourner undefined si le champ n'existe pas
        if (!checkIsEmpty(newTaskLabel)) {
          const id = `${Date.now()}-${newTaskLabel}`;
          const newTask: ITodoTemp = {
            id,
            label: newTaskLabel,
          };

          updateTasks([...tasks, newTask]);
          form.change(addTodoTaskNameAndId, "");
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
                    name="addTodoTask"
                    id="addTodoTask"
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
