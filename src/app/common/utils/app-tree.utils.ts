import { TreeNode } from 'primeng/api';
import { AppObject } from './app-object.utils';
export class AppTree {
    public static getTree(nodes: any[], labelKey: string, childKey: string): TreeNode[] {
        const tree: TreeNode[] = [];
        for (const row of nodes) {
            let child: TreeNode[] = [];
            if (!AppObject.isUndefined(row[childKey])) {
                child = this.getTree(row[childKey], labelKey, childKey);
            }
            tree.push(({
                label: row[labelKey],
                data: row,
                children: child
            }));
        }
        return tree;
    }

}
