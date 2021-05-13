import React from 'react';
import { useForm, useStep } from "react-hooks-helper";
import QuestionActiveMin from './QuestionActiveMin';
import QuestionWater from './QuestionWater';
import QuestionSteps from './QuestionSteps';
import QuestionIntensity from './QuestionIntensity';

const defaultData = {
  steps_goal: "",
  water_goal: "",
  active_min_goal: "",
  intensity: ""
}

const steps = [
  { id: "steps_goal" },
  { id: "water_goal" },
  { id: "active_min_goal" },
  { id: "intensity" },
]

export default function QuestionsForm() {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0
  })

  const props = { formData, setForm, navigation };

  console.log("props!!!", props)

  switch(step.id) {
    case "steps_goal":
      return <QuestionSteps {...props} />;
    case "water_goal":
      return <QuestionWater {...props} />;
    case "active_min_goal":
      return <QuestionActiveMin {...props} />;
    case "intensity":
      return <QuestionIntensity {...props} />;

  }

}