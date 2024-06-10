import { ChangeEvent, FormEvent, useCallback, useEffect } from "react";
import TextAreaInput, { TextAreaInputType } from "./fields/AreaInput";
import DropdownInput, { DropdownInputType } from "./fields/DropdownInput";
import FileInput, { FileInputType } from "./fields/FileInput";
import TextInput, { TextInputType } from "./fields/TextInput";
import { toast } from "react-toastify";

type ValidationType = {
  rule: any;
  message: string;
};
export type FieldFormType = {
  fieldType?: "text" | "textarea" | "dropdown" | "file";
  name: string;
  validations?: ValidationType[];
} & (TextInputType | TextAreaInputType | DropdownInputType | FileInputType);

export type FormType = {
  state: any;
  setter: any;
  fields: FieldFormType[];
  footer?: React.ReactNode;
  withSubmitButton?: boolean;
  submitLabel?: string;
  onSubmit?: () => void;
};

export default function Form({
  state,
  setter,
  fields,
  footer = null,
  withSubmitButton = false,
  onSubmit = undefined,
  submitLabel,
}: FormType) {
  const HandleChangeInput = useCallback(
    (fieldName: string, isFile = false, multiple: boolean = false) => {
      const newState = Object.assign({}, state);

      return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (isFile) {
          const files = (e as ChangeEvent<HTMLInputElement>).target.files;
          if (!files) newState.values[fieldName] = null;
          else {
            if (multiple) {
              newState.values[fieldName] = files;
            } else {
              newState.values[fieldName] = files[0];
            }
          }
        } else {
          newState.values[fieldName] = (
            e as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ).target.value;
        }

        setter(newState);
      };
    },
    [state, setter],
  );

  const HandleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const invalids: any = {};
      fields.map((field) => {
        if (!field.validations) return;

        field.validations.map((validation) => {
          if (!validation.rule(state.values?.[field.name])) {
            invalids[field.name] = validation.message;
            toast.error(`${field.label ?? field.name} ${validation.message}`);
          }
        });
      });

      const newState = Object.assign({}, state);
      newState.invalids = invalids;
      setter(newState);

      if (Object.keys(invalids).length !== 0) return false;
      if (!onSubmit) return false;

      onSubmit();
      return false;
    },
    [onSubmit, state, setter, fields],
  );

  useEffect(
    () => {
      // Handle default value
      const newState = Object.assign(
        {
          values: {},
          invalids: {},
        },
        state,
      );

      fields.map((field) => {
        newState.values[field.name] = field.value;
      });

      setter(newState);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <form className="grid grid-cols-12 gap-3" onSubmit={HandleSubmit}>
      {fields.map((field: FieldFormType) => {
        const { fieldType: type, value, validations, ...props } = field;

        if (type === "dropdown")
          return (
            <DropdownInput
              value={state?.values?.[props.name] ?? value ?? ""}
              error={state?.invalids?.[props.name] ?? ""}
              onChange={HandleChangeInput(props.name)}
              key={props.name}
              {...(props as DropdownInputType)}
            />
          );
        else if (type === "textarea")
          return (
            <TextAreaInput
              value={state?.values?.[props.name] ?? value ?? ""}
              error={state?.invalids?.[props.name] ?? ""}
              onChange={HandleChangeInput(props.name)}
              key={props.name}
              {...(props as TextAreaInputType)}
            />
          );
        else if (type === "file")
          return (
            <FileInput
              defaultValue={state?.values?.[props.name] ?? ""}
              error={state?.invalids?.[props.name] ?? ""}
              onChange={HandleChangeInput(props.name, true, false)}
              key={props.name}
              {...(props as FileInputType)}
            />
          );
        return (
          <TextInput
            value={state?.values?.[props.name] ?? value ?? ""}
            error={state?.invalids?.[props.name] ?? ""}
            onChange={HandleChangeInput(props.name)}
            key={props.name}
            {...(props as TextInputType)}
          />
        );
      })}

      <div className="col-span-12 flex flex-col">
        {footer}
        {withSubmitButton && (
          <>
            <button className="py-2 px-8 bg-primary mt-5 text-white rounded-full flex items-end gap-2 self-end font-semibold">
              {submitLabel ? (
                submitLabel
              ) : (
                <>
                  <span className="material-icons">save</span>
                  <span>Simpan</span>
                </>
              )}
            </button>
          </>
        )}
      </div>
    </form>
  );
}
