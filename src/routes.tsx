import { Icon } from "@bluebase/components";
import { TaskCreateButton } from './components/TaskCreateButton';
import { CreateTaskScreen } from './screens/CreateTaskScreen';
import { TaskDeleteButton } from "./components/TaskDeleteButton";

export const routes = [
    // {
    //     exact: true,
    //     name: 'CreateTask',
    //     path: 'create',
    //     screen: 'CreateTasksScreen',
    //     options: {
    //     title: 'Create Task',
    //     tabBarIcon: ({ color }) => (
    //     <Icon name="checkbox-multiple-marked" color={color} />
    //     ),
    //     },
    // },
    {
        name: 'CreateTask',
        screen: 'CreateTaskScreen',
        path: 'create',
        exact: true,
    
        options: {
            title: 'Create Task',
        },
    },
    // {
    //     name: 'EditTask',
    //     screen: 'EditTaskScreen',
    //     path: 't/:taskId',
    //     exact: true,
    
    //     options: {
    //         title: 'Edit Task',
    //     },
    // },
    {
        name: 'EditTask',
        screen: 'EditTaskScreen',
        path: 't/:taskId',
        exact: true,
        
        options: ({ route }: any) => ({
            title: 'Edit Task',
            headerRight: () => <TaskDeleteButton id={route.params.taskId} />
        }),
    },
    {
        name: 'TasksApp',
        path: '',
        exact: false,
        
        options: {
            title: 'My Tasks',
            headerRight: () => <TaskCreateButton />
        },
        
        navigator: {
            headerMode: 'none',
            type: 'tab',
        
            routes: [{
                exact: true,
                name: 'PendingTask',
                path: 'pending',
                screen: 'PendingTasksScreen',
    
                options: {
                    title: 'Pending',
                    tabBarIcon: ({ color }) => <Icon name="checkbox-multiple-blank-outline" color={color} />,
                },
            }, {
                exact: true,
                name: 'CompletedTasks',
                path: 'completed',
                screen: 'CompletedTasksScreen',
    
                options: {
                    title: 'Completed',
                    tabBarIcon: ({ color }) => <Icon name="checkbox-multiple-marked" color={color} />,
                },
            }],
        
            tabBarOptions: {
                showIcon: true,
                tabStyle: {
                    flexDirection: 'row',
                },
            },
        },
    }
];