import Index from "@/views/Index"
import Explore from "@/views/Explore"
import Publish from "@/views/Publish"
import NewPublish from "@/views/Publish/index"
import Question from "@/views/Question/index";
import Challenge from "@/views/Challenge/index";
<<<<<<< HEAD
import Claim from "@/views/Claim";
=======
import Claim from "@/views/Claim/index";
>>>>>>> 016fc7d (en: 添加icon样式)
import User from "@/views/User/index";
import UserEdit from "@/views/User/edit";
import Cert from "@/views/Cert";
import Lesson from "@/views/Lesson";
import Search from "@/views/Search";
import NotFound from "@/views/NotFound";
import Collection from "@/views/Collection";
import Callback from "@/views/Callback";

const routes = [
    { 
      path: "/",
      element: <Index />,
    },
    { 
      path: "/challenges",
      element: <Explore />,
    },
    { 
      path: "/collection/:id",
      element: <Collection />,
    },
    { 
      path: "/publish",
      element: <NewPublish />,
    },
    { 
      path: "/quests/:questId",
      element: <Question />,
    },
    { 
      path: "/challenge/:questId",
      element: <Challenge />,
    },
    { 
      path: "/preview",
      element: <Challenge />,
    },
    { 
      path: "/claim/:questId",
      element: <Claim />,
    },
    { 
      path: "/callback/:social",
      element: <Callback />,
    },
    { 
      path: "/user",
      children: [
        {
          path: ":address",
          element: <User />
        },
        {
          path: "edit/:address",
          element: <UserEdit />
        }
      ]
    },
    { 
      path: "/:address",
      element: <Cert />,
      key: Math.random().toString()
    },
    { 
      path: "/tutorials",
      element: <Lesson />,
    },
    { 
      path: "/vitae",
      element: <Search />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
    {
      path: '/404',
      element: <NotFound />,
    }
    
    
];
export default routes