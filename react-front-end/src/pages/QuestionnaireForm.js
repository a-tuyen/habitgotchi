import React from 'react';
import { useForm, useStep } from "react-hooks-helper";
import QuestionActiveMin from './QuestionActiveMin';
import QuestionWater from './QuestionWater';
import QuestionSteps from './QuestionSteps';
import QuestionIntensity from './QuestionIntensity';

const defaultData = {
  steps: ""
}

const steps = [
  { id: "steps_goal" },
  { id: "water_goal" },
  { id: "active_min_goal" },
  { id: "intensity" },
]

export default function QuestionnaireForm() {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0
  })

  const props = { formData, setForm, navigation };

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

  console.log('step!!', steps)

  return (
    <div>
      This is the questionnaire form
    </div>

  );
}