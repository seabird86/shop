import { TreeNode } from 'primeng/api';
import { isUndefined } from 'util';
export class AppTree {
    public static getTree(nodes: any[], labelKey: string, childKey: string): TreeNode[] {
        const tree: TreeNode[] = [];
        for (const row of nodes) {
            let child: TreeNode[] = [];
            if (!isUndefined(row[childKey])) {
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
